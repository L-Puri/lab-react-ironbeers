import React from 'react'
import newBeers from '../assets/new-beer.png';
import { AppShell, Navbar, Header } from '@mantine/core';

function NewBeers() {
  return (
    <div>
      <Header height={60} p="xs">Header</Header>
      <img src={newBeers} alt="beers" />
      <div>
      <div><h1>New Beers</h1></div>
      </div>
    </div>
  )
}

export default NewBeers

