import React, { use, useState } from 'react';
import Country from './Country';
import './countries.css';

const Countries = ({countriesPromise}) => {

    const [visitedCountries,setVisitedCountries] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('country visited clicked to be added',country)
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const countries = use(countriesPromise)

  
    return (
        <div >
            <h1>Traveling Countries : {countries.length}</h1>
            <h2>My visited country number :{visitedCountries.length} </h2>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map( country => <Country 
                    key={country.cca3} 
                    handleVisitedCountries={handleVisitedCountries}
                    country={country}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;