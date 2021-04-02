import React, {Component} from 'react';
import OrderService from '../services/order.service';


export default class OrderComponent extends Component{
    constructor(props){
        super(props);
        this.orderService = new OrderService();
        this.state={orders:this.props.orders,order:null};
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.orders !== prevState.orders) {
          return ({ orders: nextProps.orders }) // <- this is setState equivalent
        }
        return null
    }

    getAllOrders(){
        this.orderService.getOrders().then(data=>{
            this.setState({orders:data});
        });
    }

    addNewOrder(order){
        this.orderService.addOrder(order).then(data=>{
            this.getAllOrders();
        });
    }

    deleteOrder(id){
        this.orderService.deleteOrder(id).then(data=>{
            this.getAllOrders();
        })
    }

    getOrderById(id){
        this.orderService.getOrderById(id).then(data=>{
            this.setState({order:data});
        })
    }

    componentDidMount(){
        // this.getAllOrders();
    }

    render(){
        alert("Order Rendered");
        var orders = this.state.orders.map((o,i)=>{
            return <li className="list-group-item" onClick={()=>this.getOrderById(o.id)} key={o.id}>Id: {o.id} || Discount: {o.discount} || Grand Total: {o.grandTotal} </li>
        });
        if(this.state.order){
            var items = this.state.order.items.map((item,index)=>{
                return <li className="list-group-item" key={item.id}>{item.productName}||Qty:{item.qty}||Rate:{item.rate}</li>
            });
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <ul className="list-group">
                            {orders}
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="list-group">
                            {this.state.order === null?<div></div>:<React.Fragment>{items}</React.Fragment>}
                        </ul>
                    </div>
                </div>
            </div>
        )

    }

}