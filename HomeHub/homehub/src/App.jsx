import SinglePage from "./routes/single/single"
import Agents from './routes/agents/agents'
import Advice from './routes/advice/advice'
import Developments from './routes/developments/development'
import HomePage from "./routes/homepage/homepage"
import List from "./routes/listpage/list"
import Login from './routes/loginpage/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/singlepage" element ={<SinglePage/>}/>
      <Route path ="/agents" element = {<Agents/>}/>
      <Route path ="/advice" element= {<Advice/>}/>
      <Route path ="/developments" element = {<Developments/>}/>
      <Route path = "/list" element = {<List/>}/>
      <Route path= "/login" element = {<Login/>}/>
    </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
