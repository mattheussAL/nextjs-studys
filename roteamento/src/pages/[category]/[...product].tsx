import React from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

const Product: React.FC = () => {
  const router = useRouter();
  console.log(router);

  // [category] dinâmica
  // [...products] faz com que possamos obter todos os valores passados
  // pelo usuário de pois da route /products em router.products[...]

  return (
   <>
    <h1>Product</h1>
    <h2>{`/${router.query.category}/${router.query.product}`}</h2>

    <Link href="/">
      <a>Home</a>
    </Link>
   </>
  );
}

export default Product;
