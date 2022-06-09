import { analyzeAndValidateNgModules } from '@angular/compiler';
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
    if(tags!=null){
      tags.forEach((aTag: any) => {
        selectedArticles = this.articles.filter((article)=>article.TAGS.includes(aTag)).map(article => article);
      });
    }
    console.log(selectedArticles);
    return selectedArticles;
  }
}
