import './App.css';
import useFetchCharacters from './hooks/useFecthCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const {nombre, img } = useFetchCharacters(urlPokemon);
  const rick = useFetchCharacters(urlRick)
  
  return (
    <>
    <div className='card'>
      <h2>Personaje de Pokemon </h2>
      <p> {nombre} </p>
      <img src={img}  />
    </div>


    <div className='card'>
      <h2>Personaje de Rick </h2>
      <p> {rick.nombre} </p>
      <img src={rick.img}  />
    </div>

    </>
  );
}

export default App;
