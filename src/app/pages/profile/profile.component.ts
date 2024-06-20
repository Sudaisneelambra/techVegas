import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  className = {
    color: '#f3c0c2',
    'font-weight': '300',
    'border-radius': '10px',
    padding: '18px 25px',
    'font-size': '18px',
    'border':'1px solid #f3c0c2',
    'outline':'none'
  };

  constructor (private router:Router) {}

  goToHome(){
    this.router.navigate([''])
  }
}
