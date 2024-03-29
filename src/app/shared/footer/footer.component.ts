import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FooterComponent {
  year: number = new Date().getFullYear();

  navigateTo(link:string){
    window.open(link, '_blank');
  }
}
