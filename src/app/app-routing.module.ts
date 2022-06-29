import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { HomeComponent } from './home/home.component';
import { enableProdMode } from '@angular/core';
import { KitComponent } from './kit/kit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'kit', component: KitComponent},
  { path: 'articles', component: ArticleListComponent},
  { path: '**', redirectTo: 'home' },
];

enableProdMode();

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    onSameUrlNavigation: 'ignore',
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'disabled',
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
