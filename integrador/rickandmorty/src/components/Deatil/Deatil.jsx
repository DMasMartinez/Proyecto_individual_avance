import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Deatil(){
    const {id} = useParams()
    const [character,setCharacter] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return loading ? (
        <h1>Loading...</h1>
    ):(
        <div>
            <h2>{character.name}</h2>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            {character.origin.name && character.origin.name !== "unknown" &&(
                <h2>{character.origing.name}</h2>
            )}
            <img src={character.image} alt={character.name} />
        </div>
    )
};