import { Fashion } from "./Fashion";

export class CartItem{
  constructor(public fashion:Fashion){} //public ==> private + this.fashion=fashion;
  //fashion!:Fashion;
  quantity : number =1;
  price:number=this.fashion.price;
}