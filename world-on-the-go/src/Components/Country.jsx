import React from 'react';
import './country.css'

const Country = ({country}) => {
    
    const [visited,setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(true)
    }
    return (
        <div className='country'>
            <h3>Name : {country.name.common} </h3>
            <img src={country.flags.png} alt="" />
            <p>Independent : {country.independent ? 'Free' : 'Not Free'}</p>
            <p>Population : {country.population}</p>
            <button onClick={handleVisited}>Not Visited</button>
            
        </div>
    );
};

export default Country;