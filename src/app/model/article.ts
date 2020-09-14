import { Author } from './author';
import { BaseInterface } from './base-interface';

export interface SingleArticle extends BaseInterface {
    article: Article;
}

export interface MultipleArticles extends BaseInterface {
    articles: Article[];
    articlesCount: number;
}

export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: Date;
    updatedAt: Date;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
}
