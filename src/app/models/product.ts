import { IProduct } from "./iproduct";

export class Product implements IProduct {
    id = 0;
    image = '';
    name = '';
    price = 0;
    qte = 1;
    static cartLocalStorage: string = "cart";
    static productsNbPerPage: number = 5;
}
