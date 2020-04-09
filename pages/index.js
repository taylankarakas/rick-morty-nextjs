import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const Index = ({ characters }) => {
  return (
    <Layout>
      <ul>
        {characters.results.map((character, i) => <li key={i}>{character.name}</li>)}
      </ul>
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