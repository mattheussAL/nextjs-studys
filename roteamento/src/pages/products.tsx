import React from 'react';
import Link from 'next/link';

const Products: React.FC = () => {
 return (
  <>
   <h1>Products</h1>

   <Link href="/">
    <a>Home</a>
   </Link>
   
   <Link href="/category/product">
    <a>Product</a>
   </Link>
  </>
 );
}

export default Products;