import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {
  @Input() 
  corDoBackground: string = 'rgba(233, 236, 242, 0.8)';

  isAdmin = false ;


  constructor(private authService:AuthService) {
    this.setIsAdmin()
   }

  navigateTo(link:string){
    window.open(link, '_blank');
  }

  logout(){
    this.authService.logout();
  }

  setIsAdmin(){
    this.authService.role$.subscribe(role => {
      if(role === 'ADMIN'){
        this.isAdmin = true;
      }
    })
  };
}
