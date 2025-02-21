import streamlit as st
import json
import os
from dotenv import load_dotenv
from groq import Groq
import hashlib

# Load environment variables and set up Groq client
load_dotenv()
Groq.api_key = os.getenv("GROQ_API_KEY")
client = Groq()

def hash_question(question):
    """Create a hash of the question to check for uniqueness."""
    question_text = question['english'].lower()
    options = ''.join(sorted(question['options'].values())).lower()
    return hashlib.md5((question_text + options).encode()).hexdigest()

def fetch_questions(text_content, quiz_level, incorrect_questions=None, previous_questions=None):
    prompt = f"""
    Based on the following text content:
    "{text_content}"
    
    Generate 10 multiple-choice questions for an English quiz at the {quiz_level} level.
    Each question should have 4 options (A, B, C, D) and indicate the correct answer.
    
    If there are incorrect questions provided, focus on creating new questions that address similar concepts but are not identical to the previous questions.
    
    Ensure that the new questions are substantially different from any previous questions provided.
    
    Format the output as a JSON list of dictionaries, where each dictionary represents a question:
    [
        {{
            "english": "Question text",
            "options": {{
                "A": "Option A",
                "B": "Option B",
                "C": "Option C",
                "D": "Option D"
            }},
            "correct": "Correct option letter (A, B, C, or D)"
        }},
        ...
    ]
    """
    
    if incorrect_questions:
        prompt += f"\n\nIncorrect questions from previous attempt:\n{json.dumps(incorrect_questions, indent=2)}"
    
    if previous_questions:
        prompt += f"\n\nPrevious questions (avoid repeating these):\n{json.dumps(previous_questions, indent=2)}"
    
    response = client.chat.completions.create(
        model="mixtral-8x7b-32768",
        messages=[
            {"role": "system", "content": "You are an AI assistant that generates English quiz questions based on provided content."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=2000
    )
    
    try:
        questions = json.loads(response.choices[0].message.content)
        return questions  # Return all generated questions for filtering
    except json.JSONDecodeError:
        st.error("Failed to parse the generated questions. Please try again.")
        return []

def filter_unique_questions(new_questions, previous_questions, num_questions=7):
    """Filter out questions that are too similar to previous ones."""
    previous_hashes = {hash_question(q) for q in previous_questions}
    unique_questions = []
    
    for question in new_questions:
        question_hash = hash_question(question)
        if question_hash not in previous_hashes:
            unique_questions.append(question)
            previous_hashes.add(question_hash)
        
        if len(unique_questions) == num_questions:
            break
    
    return unique_questions

def main():
    st.title("English Quiz")
   
    # Initialize session state
    if 'quiz_generated' not in st.session_state:
        st.session_state.quiz_generated = False
    if 'questions' not in st.session_state:
        st.session_state.questions = []
    if 'selected_options' not in st.session_state:
        st.session_state.selected_options = []
    if 'incorrect_questions' not in st.session_state:
        st.session_state.incorrect_questions = []
    if 'text_content' not in st.session_state:
        st.session_state.text_content = ""
    if 'quiz_level' not in st.session_state:
        st.session_state.quiz_level = "Beginner"
    if 'question_generation_id' not in st.session_state:
        st.session_state.question_generation_id = 0
    if 'show_results' not in st.session_state:
        st.session_state.show_results = False
    if 'previous_questions' not in st.session_state:
        st.session_state.previous_questions = []
   
    # Text Area for content Input
    st.session_state.text_content = st.text_area("Please paste content here:", value=st.session_state.text_content)

    # Dropdown for quiz level
    st.session_state.quiz_level = st.selectbox("Select quiz level:", ["Beginner", "Intermediate", "Professional"], index=["Beginner", "Intermediate", "Professional"].index(st.session_state.quiz_level))

    # Lower case
    quiz_level_lower = st.session_state.quiz_level.lower()
   
    # Generate Quiz button
    if not st.session_state.quiz_generated:
        if st.button("Generate Quiz"):
            with st.spinner("Generating questions..."):
                st.session_state.question_generation_id += 1
                all_questions = fetch_questions(
                    text_content=st.session_state.text_content, 
                    quiz_level=quiz_level_lower
                )
                st.session_state.questions = filter_unique_questions(all_questions, st.session_state.previous_questions)
            if not st.session_state.questions:
                st.error("Failed to generate unique questions. Please try again or check the logs for more information.")
            else:
                st.session_state.quiz_generated = True
                st.session_state.selected_options = [None] * len(st.session_state.questions)
                st.session_state.show_results = False
                st.session_state.previous_questions.extend(st.session_state.questions)
            st.rerun()
   
    # Display Questions
    if st.session_state.quiz_generated:
        if not st.session_state.questions:
            st.error("No questions available. Please generate the quiz again.")
        else:
            for i, question in enumerate(st.session_state.questions):
                options = list(question["options"].values())
                st.session_state.selected_options[i] = st.radio(question["english"], options, key=f"question_{i}_{st.session_state.question_generation_id}", index=None)
       
            # Submit button
            if st.button("Submit", key="submit_button"):
                marks = 0
                st.session_state.incorrect_questions = []
                st.session_state.show_results = True
                for i, question in enumerate(st.session_state.questions):
                    selected_option = st.session_state.selected_options[i]
                    correct_option = question["options"][question["correct"]]
                    if selected_option == correct_option:
                        marks += 1
                    else:
                        st.session_state.incorrect_questions.append(question)
                st.session_state.score = marks
                st.rerun()

            # Display results after submission
            if st.session_state.show_results:
                st.header("Quiz Result:")
                for i, question in enumerate(st.session_state.questions):
                    selected_option = st.session_state.selected_options[i]
                    correct_option = question["options"][question["correct"]]
                    st.subheader(f"{question['english']}")
                    st.write(f"You selected: {selected_option}")
                    st.write(f"Correct answer: {correct_option}")
                st.subheader(f"You scored {st.session_state.score} out of {len(st.session_state.questions)}")
                
                if st.session_state.incorrect_questions:
                    if st.button("Retry Incorrect Questions", key="retry_button"):
                        with st.spinner("Generating new questions based on incorrect answers..."):
                            st.session_state.question_generation_id += 1
                            all_new_questions = fetch_questions(
                                text_content=st.session_state.text_content, 
                                quiz_level=quiz_level_lower,
                                incorrect_questions=st.session_state.incorrect_questions,
                                previous_questions=st.session_state.previous_questions
                            )
                            new_questions = filter_unique_questions(all_new_questions, st.session_state.previous_questions)
                        if not new_questions:
                            st.error("Failed to generate new unique questions. Please try again or modify the content.")
                        else:
                            st.session_state.questions = new_questions
                            st.session_state.selected_options = [None] * len(new_questions)
                            st.session_state.incorrect_questions = []
                            st.session_state.show_results = False
                            st.session_state.previous_questions.extend(new_questions)
                        st.rerun()

    # Reset button
    if st.button("Reset Quiz", key="reset_button"):
        st.session_state.quiz_generated = False
        st.session_state.questions = []
        st.session_state.selected_options = []
        st.session_state.incorrect_questions = []
        st.session_state.question_generation_id = 0
        st.session_state.show_results = False
        st.session_state.previous_questions = []
        st.rerun()

if __name__ == "__main__":
    main()