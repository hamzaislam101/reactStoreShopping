import React from 'react';
import ProductService from '../services/product.service'

export default class AddProductComponent extends React.Component{

    constructor(props){
        super(props);
        this.productService = new ProductService();
        this.state={code:''};
    }

    componentDidMount(){

    }

    onInputChange = (e)=>{
        if(e.key === "Enter"){
            this.productService.getProductByCode(this.state.code).then(data=>{
                this.setState({code:''});
                this.props.addToCart(data);
            }).catch(e=>{
                alert(e);
                this.setState({code:''});
            });
        }
    }

    render(){
        alert("Search Rendered");
        return(
            <div className="form-group">
                <label htmlFor="addProductSearch">Search By Code</label>
                <input autoFocus className="form-control" id="addProductSearch" onKeyDown={this.onInputChange} onChange={(e)=>this.setState({code:e.target.value})} value={this.state.code} type="text" />
            </div>
            
        )
    }



}