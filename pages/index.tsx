import { Grid } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import Layout from '../components/layouts/Layout'
import PokemonCard from '../components/pokemon/PokemonCard'
import { PokemonListResponse } from '../interfaces'
import { SmallPokemon } from '../interfaces/pokemon-list';

interface Props {
  pokemons: SmallPokemon[];
}



const HomePage: NextPage<Props> = ({pokemons}) => { 

  return (
    <Layout title='List of Pokemon'>
        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </Grid.Container>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async(ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  //console.log(resp.data)

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
      ...pokemon,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))

  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

export default HomePage
