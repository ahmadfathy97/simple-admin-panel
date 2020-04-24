import React, { Component } from 'react';
class Products extends Component {
  state = {
    editable: false,
    name: this.props.product.name,
    price: this.props.product.price,
    amount: this.props.product.amount
  }
  handleChange = (e)=>{
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleEdit(this.props.product.id, this.state);
    this.setState({
      editable: false
    })
  }
  handleEditable = ()=>{
    this.setState({
      editable: true
    })
  }
  render(){
    const {product, handleEdit, handleDelete} = this.props;
    return (
      <div className="product col-md-4 p-2" key={product.id}>
        <div className="border shadow border-2 p-3">
          {this.state.editable !== true ? (
            <div>
              <h4>Name: {product.name}</h4>
              <h5>Price: {product.price}</h5>
              {product.amount > 0 ? (
                <h5>Amount: {product.amount}</h5>
              ): (
                <span className="badge-danger p-1 rounded">out of stock</span>
              )}
            </div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <div className="form-group m-1">
                <label>Name: </label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange}/>
              </div>
              <div className="form-group m-1">
                <label>Price: </label>
                <input type="number" className="form-control" name="price" value={this.state.price} onChange={this.handleChange}/>
              </div>
              <div className="form-group m-1">
                <label>Amount: </label>
                <input type="number" className="form-control" name="amount" value={this.state.amount} onChange={this.handleChange}/>
              </div>
              <button type="submit" className="btn btn-primary d-block mx-auto my-4 px-5">done</button>
            </form>
          )}
          <button className="btn btn-primary m-1" onClick={this.handleEditable}>Edit</button>
          <button className="btn btn-danger m-1" onClick={()=>{handleDelete(product.id)}}>Delete</button>
        </div>
      </div>
    )
  }
}
export default Products
