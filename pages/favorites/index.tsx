import Layout from '../../components/layouts/Layout'
import NoFavorites from '../../components/ui/NoFavorites'
import React, { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';
import FavoritePokemon from '../../components/pokemon/FavoritePokemon';



const Index = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() =>{
    setFavoritePokemons(localFavorites.pokemons());

  }, [])

  return (
    <Layout title='Pokémons - Favoritos'>
      {
        favoritePokemons.length === 0
        ? (<NoFavorites />)
        : (
          <FavoritePokemon pokemons={favoritePokemons} />
        )
      }
    </Layout>
  )
}

export default Index