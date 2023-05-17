import React, { Component } from 'react'

export default class AddContact extends Component {
  state ={
    name:"",
    Email:"",
  }
  add =(e)=>{
 e.preventDefault();
 if(this.state.name===""||this.state.Email===""){
  alert("all the fields are compulsury");
  return
 }
 this.props.addContactHandler(this.state);
 this.setState({name:"",Email:""});
 
  }
  render() {
    return (
      <div className='ui name'>
        <h2>Add contact</h2>
        <form className='ui form'onSubmit={this.add} >
         <div className="field">
            <label>Name</label>
            <input type="text" name="name"placeholder='Name'value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
           
            <label>Email</label>
            <input type="Email" name="Email"placeholder='Email'value={this.state.Email} onChange={(e)=>this.setState({Email:e.target.value})} />
            </div>   
            <button className='ui button blue'>Add</button>
        </form>
        
      </div>
    )
  }
}
