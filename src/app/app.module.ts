import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SeccionAComponent } from './seccion-a/seccion-a.component';
import { SeccionBComponent } from './seccion-b/seccion-b.component';
import { SeccionCComponent } from './seccion-c/seccion-c.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlesService } from './services/articles.service';
import { MapComponent } from './map/map.component';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    SeccionAComponent,
    SeccionBComponent,
    SeccionCComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    ArticleListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    GoogleMapsModule
  ],
  providers: [ArticlesService, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
