import React from 'react';
import AddProductComponent from './Search';

export default class ShoppingCart extends React.Component{

    constructor(props){
        super(props);
        let cart = {};
        cart.items = [];
        cart.order = {
            id: 0,
            total: 0,
            discount: 0,
            grandTotal: 0
          }
        this.state={cart:this.initializeState()};
    }

    initializeState(){
        let cart = {};
        cart.items = [];
        cart.order = {
            id: 0,
            total: 0,
            discount: 0,
            grandTotal: 0
          }
          return cart;
    }


    addToCart=(item)=>{
        let cart = JSON.parse(JSON.stringify(this.state.cart));
        let sameItem = cart.items.filter(x=>x.id === item.id);
        if(sameItem.length>0){
            sameItem[0].qty++;
        }
        else{
            console.log("adding new");
            let orderItem = {
                id: item.id,
                orderId: 0,
                productName: item.name,
                qty: 1,
                rate: item.rate
              };
            cart.items.push(orderItem);
        }
        var sum = 0;
        cart.items.forEach(item => {
            sum+=(item.rate*item.qty);
        });
        cart.order.total = sum;
        cart.order.grandTotal = sum - cart.order.discount;

        this.setState({cart});
        
        
    }

    createOrder = ()=>{
        this.props.createOrder(this.state.cart);
        this.setState({cart:this.initializeState()})
    }

    render(){
        alert("Shopping Cart Rendered");
        var cartItems = this.state.cart.items.map((item,index)=>{
            return(
                <tr key={item.id}>
                    <td>{item.productName}</td>
                    <td>{item.rate}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty*item.rate}</td>
                </tr>
            )
        });

        var footerButtons = this.state.cart.items.length===0?<div></div>:

        (       <div className="row">
                    <div className="col-10"></div>
                    <div className="col-2">
                        <button onClick={this.createOrder} className="btn btn-success">Save</button>
                    </div>
                </div>
        )

        var footerHeading = this.state.cart.items.length===0?
                    <div></div>
                :           
                    <div className="row">
                        <div className="col-9"></div>
                        <div className="col-3">
                            <div className="text-right">
                                <div className="d-block">
                                    Total: {this.state.cart.order.total}
                                </div>
                                <br />
                                <div className="d-block">
                                    Discount: {this.state.cart.order.discount}
                                </div>
                                <br />
                                <div className="-block">
                                    <h4 className="d-inline">
                                        Grand Total: Rs.{this.state.cart.order.grandTotal}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        
                    </div>

        return(
            <div>
                <AddProductComponent addToCart={this.addToCart} ></AddProductComponent>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rate</th>
                            <th>Qty</th>
                            <th>Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                </table>
                {footerHeading}
                <br/>
                {footerButtons}
            </div>
        )
    }

}