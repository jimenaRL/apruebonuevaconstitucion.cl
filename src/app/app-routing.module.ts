import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "articles", component: ArticleListComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "ignore",
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 200],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
