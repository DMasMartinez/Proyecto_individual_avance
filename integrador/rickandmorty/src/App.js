import './App.css';
import React, { useEffect } from 'react';
// import Card from './components/Card.jsx';
// import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
// import characters, {Rick} from './data.js';
import Nav from "./components/Nav.jsx"
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom'
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import Home from './components/Home/Home';
// import Form from './components/Form/Form';
import { useLocation } from 'react-router-dom';
import Aparece from './components/Form/Login';
import Form from './components/Form/Form';

function App() {
   const [characters,setCharacters]=useState([])
   const { pathname } = useLocation();
   const [access,setAccess] = useState(false)
   const USER = "danielmasmar@gmail.com"
   const PASSWORD = 'DanielMas'   
   const navigate = useNavigate()
   // function onSearch(newchar){
   //    setCharacters([...characters,newchar])
   function login(user){
      if (user.email === USER && user.password ===PASSWORD){
         setAccess(true);
         navigate("/home")
      }else {
         alert ("user or password has been writting incorrect")
      }
   }

   // }
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   function onClose(iden){
      const newchars = characters.filter(character => character.id !== +iden)
      setCharacters(newchars)
      console.log("mira")
   }
   useEffect(()=>{
      !access && navigate("/")
   },[access])
   return (
      <div className='App'>
         
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         
         {pathname!=="/" && <Nav onSearch={onSearch}/>}
         {/* <Cards characters={characters} onClose={onClose}/> */}
         <Routes>
            {/* <Route path='' element={<Nav onSearch={onSearch}/>}/> */}
            
            <Route path='/home' element={<Home characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Deatil/>}/>
            <Route path='/' element={<Aparece login={login}/>}/>
         </Routes>
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.spec}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
