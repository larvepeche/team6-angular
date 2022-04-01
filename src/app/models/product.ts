import { IProduct } from "./iproduct";

export class Product implements IProduct {
    id = 0;
    image = '';
    name = '';
    price = 0;
    quantity = 1;
    qtyCart = 1;
    static cartLocalStorage: string = "cart";
    static productsNbPerPage: number = 5;
}
