import React from 'react'
import ProductService  from '../services/product.service';
import OrderComponent from './Order';
import OrderService from '../services/order.service';
import ProductComponent from './Product';
import TopDiv from './TopDiv';
import ShoppingCart from './ShoppingCart'

export default class AppComponent extends React.Component{


    constructor(props){
        super(props);
        this.productService = new ProductService();
        this.orderService = new OrderService();
        this.state = {products:[],orders:[]};
    }

    componentDidMount(){
        this.getAllProducts();
        this.getAllOrders();
    }

    async getAllProducts(){
        const products = await this.productService.getProducts();
        this.setState({products});
    }
    createOrder = (cart)=>{
        this.orderService.addOrder(cart).then(data=>{
            alert("order added");
            this.orderService.getOrders().then(data=>{
                this.setState({orders:data});
            })
        });
    }

    addProduct = (product)=>{
        this.productService.addProduct(product).then(data=>{
            this.productService.getProducts().then(data=>{
                this.setState({products:data});
            })
        })
    }

    getAllOrders(){
        this.orderService.getOrders().then(data=>{
            this.setState({orders:data});
        });
    }

    render(){
        return(
            <div>
                <TopDiv>
                    <ShoppingCart createOrder={this.createOrder}></ShoppingCart>
                </TopDiv>

                <br/>

                <OrderComponent orders={this.state.orders}></OrderComponent>

                <br/>

                <ProductComponent addProduct={this.addProduct} products={this.state.products} ></ProductComponent>
            </div>
        )
    }

}