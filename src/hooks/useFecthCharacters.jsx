import { useState, useEffect } from 'react';

function useFetchCharacters(url) {
    const [character, setCharacter ] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError ] = useState(null)

    useEffect(() => {
        const BuscarPersonaje = async () => {

            try{
                const response = await fetch(url);

                if(!response.ok) {
                    throw new Error('Ha habido un error')
                }
                
                const data = await response.json();
                setCharacter(data);
                setLoading(false)
            }
            catch(err){
                setError(err)
                console.log('Ha ocurrido un error al conectar con la API', error)
            }
        };
        BuscarPersonaje();
    }, [url]);

    return { character, loading }     
}

export default useFetchCharacters;