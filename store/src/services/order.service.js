import axios from 'axios'
export default class OrderService{

    constructor(){
        this._service = axios.create({
            baseURL:"https://localhost:44301/api"
        });
    }

    async getOrders(){
        const resp  = await this._service.get("/Order");
        return resp.data;
    }

    async addOrder(order){
        const resp  = await this._service.post("/Order",order);
        return resp.data;
    }

    async getOrderById(id){
        const resp  = await this._service.get("/Order/"+id);
        return resp.data;
    }

    async deleteOrder(id){
        const resp  = await this._service.delete("/Order/"+id);
        return resp.data;
    }



}