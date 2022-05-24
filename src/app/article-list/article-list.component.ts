import { Component, Input, OnInit } from '@angular/core';
import dataSource from '../../assets/datasource.json';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles = dataSource;
  @Input() tags:string[] | undefined;
  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
