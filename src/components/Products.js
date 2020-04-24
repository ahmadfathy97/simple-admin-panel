import React, { Component } from 'react';
import Product from './Product';
import AddProduct from './AddProduct';

class Products extends Component {
  state = {
    products: [
      {id: 1, name: 'product1', price: '10', amount: 9},
      {id: 2, name: 'product2', price: '20', amount: 0},
      {id: 3, name: 'product3', price: '30', amount: 19},
      {id: 4, name: 'product4', price: '40', amount: 5},
      {id: 5, name: 'product5', price: '40', amount: 15},
      {id: 6, name: 'product6', price: '30', amount: 0},
      {id: 7, name: 'product7', price: '45', amount: 5}
    ]
  }
  handleEdit = (id, EditedProduct)=>{
    let products = this.state.products.map((product)=>{
      if(product.id === id){
        product.name = EditedProduct.name;
        product.price = EditedProduct.price;
        product.amount = EditedProduct.amount;
      }
      return product;
    });
    this.setState({products: products})
  }
  handleDelete = (id) => {
    let products = this.state.products.filter((product)=>{
      return product.id !== id
    });
    this.setState({products: products})
  }
  handleAddProduct = (product) => {
    console.log(product);
    let products = [...this.state.products, product]
    this.setState({products: products})
  }
  render(){
    const productsList = this.state.products.map((p)=>{
      return (
        <Product product={p} handleEdit={this.handleEdit} handleDelete={this.handleDelete} key={p.id} />
      )
    });
    return(
      <div className="row">
        <AddProduct handleAdd={this.handleAddProduct}/>
        <h1 className="col-md-12 m-2">products</h1>
        {productsList}
      </div>
    )
  }
}
export default Products
