import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {
  @Input() 
  corDoBackground: string = 'rgba(233, 236, 242, 0.8)';

  constructor() {
    
   }

  navigateTo(link:string){
    window.open(link, '_blank');
  }
}
