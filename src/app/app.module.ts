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
import { CarouselControlsComponent } from './carousel-controls/carousel-controls.component';
import { CarouselControlsInnerComponent } from './carousel-controls-inner/carousel-controls-inner.component';
import { MapMarkersService } from './services/map-markers.service';
import { KitComponent } from './kit/kit.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { VideoComponent } from './video/video.component';

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
    MapComponent,
    CarouselControlsComponent,
    CarouselControlsInnerComponent,
    KitComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    GoogleMapsModule,
    AutocompleteLibModule
  ],
  providers: [ArticlesService, MapMarkersService, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
