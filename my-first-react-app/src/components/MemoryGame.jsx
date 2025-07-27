import Card from './Card.jsx'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

function MemoryGame(){
    const pokemons = ["Gardevoir","Tyranitar","Floatzel","Clawitzer","Hawlucha","Mudkip","Chandelure","Talonflame","Sableye"]; //PREDEFINED POKEMON LIST
    const [pokemonUrl, setPokemonUrl] = useState([]);                                                                           //IMG SOURCE ARRAY
    const [points, setPoints] = useState(0);                                                                                    //POINT COUNTER
    const [highScore, sethighScore] = useState(0);                                                                           //HIGH SCORE TRACKER 
    const found = useRef([]);                                                                                                    //POKEMON FOUND
    
    useEffect(() => {                        //EFFECT MAKES LOADING OF THE SOURCES ONLY ONCE
        const fetchAndProcessItems = async () => {                           
            try {
                const promises = pokemons.map(async (poke) => {         //ASYC FETCH FUNCTION FOR EVERY TIME THE API IS USED 
                    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + poke);
                    const data = await response.json();
                    return { name: poke, url: data['sprites']['other']['official-artwork']['front_default'], status: 'processed' }; // Return processed data
                });
                const results = await Promise.all(promises);
                setPokemonUrl(results);         
            } catch (error) {
                console.error('Error fetching and processing items:', error);
            }
        };
        fetchAndProcessItems();
    }, []);



    
    function shuffle(e) {//SHUFFLE FUNCTION FOR THE CARDS 
        const pokemon = e.target.id
        const array = pokemonUrl.map((x) => x);
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
        }

        if(found.current.includes(pokemon)){//IF IT HAS BEEN FOUND RESET
            setPoints(0);
            found.current = [];
        }else{                              //ELSE GET A POINT
            setPoints(points + 1);
            found.current.push(pokemon);
        }
        if(highScore < points ){            //IF CURRENT SCORE IS HIGHER REPLACE
            sethighScore(points);
        }
        setPokemonUrl(array);               //UPDATE SHUFFLED ARRAY

    }


    return(
        <>
            <h3>Memory game</h3>
            <h5>Get points by clicking on an image but don't click on any more than once!</h5>
            <h4>HIGH SCORE: {highScore}</h4>
            <h4>POINTS: {points}</h4>
            <div className='grid'>
                {pokemonUrl.map(item => ( 
                    <Card key={item.name} id={item.name} url={item.url} click={shuffle}/> //IMG CARRIER COMPONENT
                ))}
            </div>
        </>
    )
}


export default MemoryGame
