// File: src/app/components/centers/page.js

import CentersClient from './CentersClient'

const centerInfo = [
  {
    name: "Princess Alice Care Centre",
    image: "https://media.istockphoto.com/id/1397844973/photo/shot-of-a-group-of-children-sitting-in-class.jpg?s=612x612&w=0&k=20&c=P0VXXNFOH0eFgRAEUDEzXB6LROhHEN9_1VBPOZBb4-Q=",
    info: "Princess Alice Adoption Home (PA), located in Westcliff, is one of JCW's oldest programs, offering a safe space for up to 30 babies and toddlers who have been abandoned, neglected, or abused. PA aims to transition these children into permanent families as quickly as possible while providing essential care, including nutrition, medical services, affection, and early learning. The centre also features a Granny Programme, where each 'Gogo' provides personalized care and support to two children, fostering secure attachments and developmental growth, with support from Spence-Chapin (USA).",
  },
  {
    name: "Elton John Masibambisane Community Centre",
    image: "https://media.istockphoto.com/id/1387226163/photo/portrait-of-a-little-boy-with-a-plaster-on-his-arm-after-an-injection.jpg?s=612x612&w=0&k=20&c=3dlo_ztuREvJWLNbdqlgGcztceBgk5qDdU7ulYaErkk=",
    info: "The Elton John Masibambisane Centre (Masi) supports children and families in Eldorado Park and surrounding areas by addressing challenges like crime, poverty, and HIV/AIDS. Masi helps over 350 beneficiaries annually through its Early Childhood Development Centre and afterschool programs. It also works on outreach projects to combat poverty, abuse, and stigma, focusing on food security, access to social services, and caregiver training to strengthen community resilience and empower individuals.",
  },
  {
    name: "Othandweni Family Care Centre",
    image: "https://media.istockphoto.com/id/1475841879/photo/children-freedom-and-energy-with-friends-cheering-together-outdoor-while-having-fun-during.jpg?s=612x612&w=0&k=20&c=KQ1poS9fHkIqLg3mwnx70xsl-E-9DU-vkkoUUbTJSqw=",
    info: "The Othandweni Family Care Centre in Soweto supports up to 90 children from newborns to teens who face abandonment, neglect, or family separation. It offers a Nursery for younger children and a home-like cottage setup for older ones, focusing on holistic development through therapeutic and recreational programs. Since 2011, the centre has also run the 'Granny Programme,'' pairing children with community 'Gogos' for care and developmental support, while older children benefit from mentorship. Othandweni is dedicated to providing a nurturing foundation for each child's growth and future.",
  }
];

export default function CentersPage() {
  return <CentersClient centers={centerInfo} />;
}


