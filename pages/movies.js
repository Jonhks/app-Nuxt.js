import React from 'react';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Menu from '../components/Menu'




export default function movies (props) {
  
  const { movies } = props

  return (
    <div>
      <Menu /> 
      <h1 style={{textAlign: "center"}} >Esta es la pag de peliculas</h1>
      {movies.map((movie, index) => (
        <Link key={index} href="/movie/[movie]" as={`/movie/${movie.id}`}>
          <a style={{marginRight: 20 }}>
            {movie.name}
          </a>
        </Link>
      ))}
    </div>
  )
}


movies.getInitialProps = async () => {
  const url = 'https://api.myjson.com/bins/17m23o'
  const resp = await fetch(url)
  const movies = await resp.json()
  
  return {movies}
}