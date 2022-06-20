import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css', '../app.component.css']
})
export class ArticleListComponent implements OnInit {
  articles:any = [];
  @Input() tags:string[] | undefined;

  constructor(private articlesService: ArticlesService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let tag=params["q"];
      if(tag!=null){
        this.articles = this.articlesService.getArticlesByTags(tag);
      }else{
        this.articles = this.articlesService.getArticles();
      }
    });
  }

}
