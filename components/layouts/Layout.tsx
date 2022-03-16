import Head from "next/head"
import { Children, FC } from "react";
import Navbar from '../ui/Navbar';


interface Props{
    title?: string;
}

const origin = (typeof window === 'undefined' ? '' : window.location.origin);

const Layout: FC<Props> = ({children, title}) => {  
  
  //console.log({origin})

  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'} </title>
            <meta name="author" content="Raul Rodriguez" />
            <meta name="description" content="Información sobre el Pokemon XXXXX" />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />

            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta es la información sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/Banner-Pokemon.jpg`} />

            
        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            {children}
        </main>
        
    </>
  )
}

export default Layout