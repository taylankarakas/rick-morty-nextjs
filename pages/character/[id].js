import React from 'react';
import Layout from '../../src/components/Layout';
import CharacterCard from '../../src/components/CharacterCard';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router'

let id;

const CharacterDetail = ({ character }) => {
  const router = useRouter();
  id = router.query;
  return (
    <Layout>
      <CharacterCard
        key={character.id}
        name={character.name}
        image={character.image}
        status={character.status}
        species={character.species}
        gender={character.gender}
      />
    </Layout>
  );
};

export async function getStaticPaths() {
  const data = await fetch('https://rickandmortyapi.com/api/character/');
  const characters = await data.json();

  const paths = characters.results.map(item => ({
    params: { id: `${item.id}` }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch('https://rickandmortyapi.com/api/character/' + params.id);
  const character = await data.json();
  return {
    props: {
      character
    },
  }
}

export default CharacterDetail;