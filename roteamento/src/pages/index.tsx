import React from 'react';

// Retorna um json, onde a aplicação será alterada somente onde é necessário
// Evita o reload da page
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Roteamento Dinâmico</h1>
      
      <Link href="/products">
        <a>Products</a>
      </Link>
    </>
  )
}
