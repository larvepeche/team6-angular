import { IUser } from "./iuser";

export class User implements IUser {
    username = '';
    static userLocalStorage = "user";
}
