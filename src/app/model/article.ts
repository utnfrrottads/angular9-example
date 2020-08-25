import { Author } from './author';

export interface SingleArticle {
    article: Article;
}

export interface MultipleArticles {
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