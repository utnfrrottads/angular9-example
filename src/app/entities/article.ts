export class Article {
    title:string;
    slug:string;
    body:string;
    createdAt:Date;
    updatedAt:Date;
    tagList:string[]
    description:string;
    author:Object;
    favorited:boolean;
    favoritesCount:number;
    
    static createArticle(art){
        let article = new Article();
        Object.assign(article,art);
        article.createdAt = new Date(art.createdAt);
        return article;
    }
}
