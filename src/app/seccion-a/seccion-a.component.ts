import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion-a',
  templateUrl: './seccion-a.component.html',
  styleUrls: ['./seccion-a.component.css', '../app.component.css']
})
export class SeccionAComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.router.navigate(["/"]);
  }

  navigateFragment(url:any, fragment:any){
    this.router.navigate([url],{ fragment: fragment, skipLocationChange: true });
  }

}
