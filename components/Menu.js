import React from 'react';
import Link from 'next/link'

import './Menu.sass'

export default () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href="/movies">
          <a>Peliculas</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contacto</a>
        </Link>
      </li>
    </ul>
  )
}