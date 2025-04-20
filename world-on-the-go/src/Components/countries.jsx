import React, { use } from 'react';
import Country from './Country';
import './countries.css';

const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise)

  
    return (
        <div >
            <h1>Traveling Countries : {countries.length}</h1>
            <div className='countries'>
            {
                countries.map( country => <Country key={country.cca3} country={country}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;