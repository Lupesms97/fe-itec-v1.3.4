import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-collaborator-navbar',
  templateUrl: './collaborator-navbar.component.html',
  styleUrls: ['./collaborator-navbar.component.css']
})
export class CollaboratorNavbarComponent {

  @Input() 
  corDoBackground: string = '#2c64a4';

  constructor(private authService:AuthService) {}

  logout(){
    this.authService.logout();
  }

}
