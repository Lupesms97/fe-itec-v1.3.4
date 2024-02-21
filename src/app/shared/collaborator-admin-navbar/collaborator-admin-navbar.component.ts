import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-collaborator-admin-navbar',
  templateUrl: './collaborator-admin-navbar.component.html',
  styleUrls: ['./collaborator-admin-navbar.component.css']
})
export class CollaboratorAdminNavbarComponent {

  @Input() 
  corDoBackground: string = '#2c64a4';

  constructor(private authService:AuthService) {
    
   }

  logout(){
    this.authService.logout();
  }

}
