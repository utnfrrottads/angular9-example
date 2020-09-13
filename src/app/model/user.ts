import { BaseInterface } from './base-interface';

export interface SingleUser extends BaseInterface{
    user: User;
}

export interface User {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
}