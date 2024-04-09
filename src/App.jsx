import './App.css';
import useFetchCharacters from './hooks/useFecthCharacters';
import CardAdd from './components/CardApp';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const {character:pokemon, loading:pokemonLoading } = useFetchCharacters(urlPokemon);
  const {character:rick, loading: rickLoading } = useFetchCharacters(urlRick)
  
  return (
    <>
      <div className='card'>
        {pokemonLoading 
        ? (<p>Loading...</p>)
        : <>
              <CardAdd title='Personaje Pokemon' name={pokemon.name} image={pokemon.sprites.other['official-artwork'].front_default} />
          </>
        }
    </div>

    {
    // abajo  rick sin componente, arriba pokemon con componente cardAdd. El componente CardAdd se puede reutilizar para tmb para Rick
    }
    <div className='card'>
      <h2>Personaje de Rick </h2>
      {rickLoading 
      ? (<p>Loading...</p>)
      : <>
          <p> {rick.name} </p>
          <img src={rick.image} alt={pokemon.name} />
        </>
    }
    </div>
    </>
  );
}

export default App;
