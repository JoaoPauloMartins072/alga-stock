import React, {useState} from 'react';
import Swal from 'sweetalert2'
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import { Product } from './../../shared/Table/Table.mockdata';


const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {

  const [products, setProducts ] = useState(Products)
  
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(products[0])

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products, 
      {
        id: products.length + 1,
        ...product
      }
    ])
  }

  const handleProductDetail= (product: Product) => {
    Swal.fire(
      'Product details',
      `${product.name} cost $${product.price}. We have ${product.stock} available stock`,
      'info'
    )
  }

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(products.map(product => 
      product.id === newProduct.id
      ? newProduct
      : product

      ))

      setUpdatingProduct(undefined)
  }

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !==id))
  }
  const handleProductDelete = (product: Product) => {   
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${product.name}!`
    }).then((result) => {
      if (result.value) {
        deleteProduct(product.id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  const handleProductEdit = (product: Product) => {   
    setUpdatingProduct(product)
  }

  return (
    <div className="App">
      <Header title="AlgaStock" />

      <Container>

        <Table
          headers={headers}
          data={products}
          enableActions={true}
          onDelete={handleProductDelete}
          onDetail={handleProductDetail}
          onEdit={handleProductEdit}

        />

        <ProductForm
          form={updatingProduct}
          onSubmit={handleProductSubmit}
          onUpdate={handleProductUpdate}
        />

      </Container>
    </div>
  );
}

export default App;