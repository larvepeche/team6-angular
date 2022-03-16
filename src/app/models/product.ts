import { IProduct } from "./iproduct";

export class Product implements IProduct {
    id = 0;
    img = '';
    name = '';
    price = 0;
    static cartLocalStorage: string = "cart";
}
