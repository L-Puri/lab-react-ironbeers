import React from 'react'
import allBeers from '../assets/beers.png';
import { AppShell, Navbar, Header } from '@mantine/core';
import axios from 'axios'; 
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Beers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            console.log('response.data', response.data);
            setBeers(response.data)
        });
    }, [] );

    return (
    <div>
        <Header height={60} p="xs">Header</Header>
        <img src={allBeers} alt="beers" />
        <div><h1>All Beers</h1></div>
        
        {beers.map((beer) => (
            <div key={beer._id} className="header">
                <img src={beer.image_url} alt="beer" />
                <h3>{beer.name}</h3>
                <Link to={`/beers/${beer._id}`}>Go to Beer Details</Link>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
                </div>
        ))}
    </div>
    )
}

export default Beers