import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-kli';

  constructor(  
    private route: ActivatedRoute,
    private router: Router) {}


  public redirect(){
    console.log(this.router)
    this.router.navigate(['list']);
  }
}
