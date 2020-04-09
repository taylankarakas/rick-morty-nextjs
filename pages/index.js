import React from 'react';
import Layout from '../src/components/Layout';
import CharacterCard from '../src/components/CharacterCard';
import fetch from 'isomorphic-unfetch';

const Index = ({ characters }) => {
  return (
    <Layout>
      {characters.results.map(character =>
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
        />
      )
      }
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetch('https://rickandmortyapi.com/api/character/');
  const characters = await data.json();
  return {
    props: {
      characters
    },
  }
}

export default Index;