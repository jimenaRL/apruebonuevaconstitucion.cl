import { Injectable } from '@angular/core';
import dataSource from '../../assets/datasource.json';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles = dataSource;
  constructor() { }

  getArticles(){
    return this.articles;
  }

  getArticleById(id: number){
    return this.articles.find((article)=>article.id == id);
  }

  getArticlesByTags(tags:any){
    let selectedArticles: any = [];
    tags = Array.isArray(tags) ? tags : [tags];
    if(tags!=null){
      tags.forEach((aTag: any) => {
        selectedArticles = this.articles.filter((article)=>article.tags.includes(aTag)).map(article => article);
      });
    }
    return selectedArticles;
  }
}
