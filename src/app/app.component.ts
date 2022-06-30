import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
declare var gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private routerSubscription: Subscription | undefined;
  constructor(private router: Router) {
  }
  ngAfterViewInit(): void {
    // subscribe to router events and send page views to Google Analytics
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if(event instanceof NavigationEnd){
          gtag('config', 'UA-321441461–1', 
          {'page_path': event.urlAfterRedirects});
        }
      });
  }
  
  ngOnDestroy(): void {
    this.routerSubscription!.unsubscribe();
  }
}