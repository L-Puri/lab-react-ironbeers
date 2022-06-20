import React from 'react'
import randomBeers from '../assets/random-beer.png';
import { AppShell, Navbar, Header } from '@mantine/core';

function RandomBeers() {
  return (
    <div>
      <Header height={60} p="xs">Header</Header>
      <img src={randomBeers} alt="beers" />
      <div><h1>Random Beers</h1></div>
    </div>
  )
}

export default RandomBeers