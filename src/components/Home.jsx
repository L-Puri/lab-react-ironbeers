import React from 'react'
import allBeers from '../assets/beers.png';
import newBeers from '../assets/new-beer.png';
import randomBeers from '../assets/random-beer.png';
import { AppShell, Navbar, Header, MantineProvider } from '@mantine/core';

function Home() {
    return (
    <div>
        {/* <img src={allBeers} alt="beers" /> */}
        <div>
            <MantineProvider>
            <Header height={60} p="xs" theme={{colors: {blue: ["#74c0fc", "#4dabf7"]}}} styles={{header: (theme) => ({root: {backgroundColor: theme.colors.blue[1]}}),}}>Header</Header>
            </MantineProvider>

        <img src={allBeers} alt="beers" />
        <div><h1>All Beers</h1></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam autem laborum quaerat libero dignissimos.</p>
        </div>
        
        <div>
        <img src={newBeers} alt="beers" />
        <div><h1>New Beers</h1></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam autem laborum quaerat libero dignissimos.</p>
        </div>
        
        <div>
        <img src={randomBeers} alt="beers" />
        <div><h1>Random Beers</h1></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam autem laborum quaerat libero dignissimos.</p>
        </div>
        
    </div>

    
    
    )
}

export default Home;