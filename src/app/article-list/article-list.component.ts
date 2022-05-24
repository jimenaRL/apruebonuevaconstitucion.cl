import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles:any = [];
  @Input() tags:string[] | undefined;
  
  constructor(private articlesService: ArticlesService,private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let tagsArray=params["tags"];
      if(tagsArray!=null && tagsArray.lenght>0){
        this.articles = this.articlesService.getArticlesByTags(tagsArray);
      }
    });
  }

}
