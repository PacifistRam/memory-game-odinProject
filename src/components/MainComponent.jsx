import Header from "./Header"
import { useEffect, useState } from "react"
import axios from "axios"

import Card from "./Card"

const MainComponent = () => {

  const [pokemon,setPokemon] = useState([]);
  
  const [clickedPokemon,setClickedPokemon] = useState([])
  const [highScore,setHighScore] = useState(0)

  const getPokemon = async(result) => {
    
    try {
      //use Promise.all to wait for all sync operations to finish
      const pokemonArray =  await Promise.all(result.map(async (item) => {
        const pokemonResult = await axios.get(item.url);
        const pokemonData = pokemonResult.data;
        const { name, id, types } = pokemonData;
        const sprites = pokemonData.sprites.other['official-artwork']
        return {name,id, types,sprites}
      }));

      //set the pokemon state with the pokemonArray
      setPokemon(pokemonArray);

    } catch (error) {
      console.error("error fetching Pokemon data:", error);
    }
  }


  useEffect(() =>{
    const pokeApi = async() => {
      const url = "https://pokeapi.co/api/v2/pokemon/?offset=50&limit=16"

      const res = await axios.get(url);
      const result = res.data.results
      getPokemon(result);
    }

    pokeApi();
  },[])


  const handleClick = (pokeId) => {
    if(!clickedPokemon.includes(pokeId)){

      setClickedPokemon(prevClicked => [...prevClicked,pokeId])
      console.log(clickedPokemon)
      setHighScore((prevScore) =>( clickedPokemon.length > prevScore? clickedPokemon.length : prevScore) )
    }
    else {
          console.log("duplicate id")
          setClickedPokemon([])
          alert("You loose")
    }
  }

  return (
    <div className="max-w-[1440px] m-auto bg-slate-400 text-slate-100 
    min-h-screen ">
        <Header count ={clickedPokemon}
                highScore ={highScore} />
        <div className="px-2 py-3 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 ">
           {
              pokemon.map(poke => (
                <Card key={poke.id} data ={poke} onClickHandle = {() =>handleClick(poke.id)} />
              ))
            }
        </div>
    </div>
  )
}

export default MainComponent