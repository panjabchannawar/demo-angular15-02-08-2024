import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-app';
  constructor(private router: Router){}

  navigateToProductPage(){
    this.router.navigate(['products'])
  }

}
