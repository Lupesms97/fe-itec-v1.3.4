import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule,
  RouterModule]
})
export class NavbarComponent {

  @Input() corDoBackground: string = '#2c64a4';

  constructor() {
    
   }

  navigateTo(link:string){
    window.open(link, '_blank');
  }
}
