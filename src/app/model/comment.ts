import { Author } from './author'

export interface MultipleComments{
    comments: Comment[];
}

export interface Comment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    author: Author;
}