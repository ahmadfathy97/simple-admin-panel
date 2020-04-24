import React, { Component } from 'react';
class Products extends Component {
  state = {
    id: parseInt(Math.random().toString().slice(2,8), 10),
    name: '',
    price: '',
    amount: ''
  }
  handleChange = (e)=>{
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.setState({
      id: parseInt(Math.random().toString().slice(2,8), 10),
      name: '',
      price: '',
      amount: ''
    })
  }
  render(){
    return (
      <div className="add-product col-md-12 border border-2 shadow p-1">
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
          <button type="submit" className="btn btn-primary d-block mx-auto my-4 px-5">Add</button>
        </form>
      </div>
    )
  }
}
export default Products
