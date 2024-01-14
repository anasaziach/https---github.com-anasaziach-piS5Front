export default class Product {
    id: number;
    title: string;
    price: number;
    disponibility:boolean;
    category: string;
    imgUrl: string;
    description:string;
    rate:number;

    constructor(id: number,title: string,price: number,disponibility:boolean,category: string,imgUrl: string,description:string,rate:number) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imgUrl = imgUrl;
        this.category = category;
        this.disponibility = disponibility;
        this.description = description;
        this.rate = rate;
    }
    
}