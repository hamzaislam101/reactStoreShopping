import axios from 'axios';
export default class ProductService{

    constructor(){
        this._service = axios.create({
            baseURL:"https://localhost:44301/api"
        });
    }

    async getProducts(){
        const resp  = await this._service.get("/Products");
        return resp.data;
    }

    async addProduct(prod){
        const resp  = await this._service.post("/Products",prod);
        return resp.data;
    }

    async getProductById(id){
        const resp  = await this._service.get("/Products/"+id);
        return resp.data;
    }

    async getProductByCode(code){
        const resp  = await this._service.get("/Products/GetProductByCode?code="+code);
        return resp.data;
    }

    async updateProduct(prod){
        const resp  = await this._service.put("/Products/"+prod.id,prod);
        return resp.data;
    }

    async deleteProduct(id){
        const resp  = await this._service.delete("/Products/"+id);
        return resp.data;
    }
}
