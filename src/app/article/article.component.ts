import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css', '../app.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: any;

  constructor() { }

  ngOnInit(): void {
    
    console.log(this.article);
  }

}
