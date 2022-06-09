import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['../app.component.css', './article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.article);
  }

}
