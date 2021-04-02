import React, {Component} from 'react';


export default class ProductComponent extends Component{


    constructor(props){
        super(props);
        this.state = {products:props.products,name:'',code:'',rate:0,cost:0,stock:0};
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.products !== prevState.products) {
          return ({ products: nextProps.products }) // <- this is setState equivalent
        }
        return null
    }

    initializeProduct(){
        return JSON.parse('{"id": 0, "code": "string", "name": "string", "rate": 0, "cost": 0, "stock": 0}');
    }

    addProduct = (e)=>{
        let p = this.initializeProduct();
        p.code = this.state.code;
        p.name = this.state.name;
        p.stock = this.state.stock;
        p.rate = this.state.rate;
        p.cost = this.state.cost;
        this.props.addProduct(p);
    }


    render(){
        alert("Product Rendered");
        const productList = this.state.products.map((p,index)=>{
            return <li className="list-group-item" key={p.id}>{p.name}</li>
        });
        return(
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <div className="form-group">
                            <label htmlFor="productCode" className="font-weight-bold">Code</label>
                            <input id="productCode" className="form-control" value = {this.state.code} onChange={e=>this.setState({code:e.target.value})} />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-group">
                            <label htmlFor="productName" className="font-weight-bold">Name</label>
                            <input id="productName" className="form-control" value = {this.state.name} onChange={e=>this.setState({name:e.target.value})} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <label htmlFor="productCost" className="font-weight-bold">Cost</label>
                            <input id="productCost" type="number" className="form-control" value = {this.state.cost} onChange={e=>this.setState({cost:e.target.value*1})} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <label htmlFor="productRate" className="font-weight-bold">Rate</label>
                            <input id="productRate" type="number" className="form-control" value = {this.state.rate} onChange={e=>this.setState({rate:e.target.value*1})} />
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <label htmlFor="productStock" className="font-weight-bold">Stock</label>
                            <input id="productStock" type="number" className="form-control" value = {this.state.stock} onChange={e=>this.setState({stock:e.target.value*1})} />
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="form-group">
                            <label htmlFor="AddButton" className="font-weight-bold"></label>
                            <button id="AddButton" onClick={this.addProduct} className="btn btn-success">Add</button>
                        </div>
                    </div>
                </div>
                <br/>
                {productList}
            </div>
        )
    }


}