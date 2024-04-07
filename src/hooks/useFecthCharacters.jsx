import { useState, useEffect } from 'react';

function useFetchCharacters(url) {
    const [nombre, setNombre ] = useState('');
    const [img, setImg ] = useState('');

    useEffect(() => {
        const BuscarPersonaje = async () => {

            try{
                const response = await fetch(url);

                if(!response.ok) {
                    throw new Error('Ha habido un error')
                }
                
                const data = await response.json();
                setNombre(data.name);

                if(url.includes('pokeapi')){
                    setImg(data.sprites.other['official-artwork'].front_default)
                }
                else{
                    setImg(data.image)
                }
            }
            catch(error){
                console.error('Ha ocurrido un error al conectar con la API', error)
            }
        };
        BuscarPersonaje();
    }, []);

    return { nombre, img }     
}

export default useFetchCharacters;