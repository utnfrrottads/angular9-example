import { Author } from './author';
import { BaseInterface } from './base-interface';

export interface MultipleComments extends BaseInterface{
    comments: Comment[];
}

export interface Comment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    author: Author;
}
