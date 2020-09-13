export interface BaseInterface {
    errors: Errors;
}

interface Errors{
    body: string[];
    username: string[];
    password: string[];
    email: string[];
}