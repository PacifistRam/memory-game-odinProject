import Header from "./Header"
import { useEffect, useState } from "react"
import axios from "axios"

const MainComponent = () => {

  const [pokemon,setPokemon] = useState([]);

  const getPokemon = async(result) => {
    
    try {
      //use Promise.all to wait for all sync operations to finish
      const pokemonArray =  await Promise.all(result.map(async (item) => {
        const pokemonResult = await axios.get(item.url);
        const pokemonData = pokemonResult.data;
        //console.log(pokemonData)
        const { name, id, types,sprites } = pokemonData;
        console.log(sprites.front_default)
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
      const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=16"

      const res = await axios.get(url);
      const result = res.data.results
      getPokemon(result);
    }

    pokeApi();
  },[])

  return (
    <div className="max-w-[1440px] m-auto bg-slate-400 text-slate-100
    min-h-screen ">
        <Header />
        <div>
          {
            pokemon.map(poke => (
              <div key={poke.id}>
                <h3>Name:<span>{poke.id}</span>{poke.name}</h3>
                <img src={poke.sprites.front_default} alt="" width="200px" />
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default MainComponent