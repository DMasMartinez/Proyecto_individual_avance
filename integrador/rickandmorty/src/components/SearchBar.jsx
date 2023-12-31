import { useState } from "react";

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

export default function SearchBar(props) {
   const {onSearch} = props;
   const [id,setId] = useState("")
   function handlechange(event){
      return (
         setId(event.target.value)
      )
   }
   return (
      <div>
         <input type='search' onChange={handlechange} />
         <button onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
