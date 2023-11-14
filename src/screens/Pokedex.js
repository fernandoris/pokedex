import { View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { getPokemonsApi,getPokemonDetailsByUrlApi } from '../api/Pokemon'
import PokemonList from '../components/PokemonList';

export default function Pokedex() {

  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //console.log('pokemons ---> ', pokemons);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      setIsLoading(true);
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next)
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        //console.log(pokemonDetails);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
      setIsLoading(false);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <View>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} isLoading={isLoading}/>
    </View>
  )
}