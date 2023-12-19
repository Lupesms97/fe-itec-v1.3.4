import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-prize-draw',
  templateUrl: './prize-draw.component.html',
  styleUrls: ['./prize-draw.component.css']
})
export class PrizeDrawComponent {

  private readonly cookieD = 'p-dscw';
  private readonly cookieC = 'p-dsc';
  percentOdDisconutSorted: string = '';
  descountCode: string = '';


  constructor(private cookieService:CookieService) { }


  getCookie(cookiename:string){
    return this.cookieService.get(cookiename);
  }

  setCookie(cookiename:string, percentage: string){
    this.cookieService.set(cookiename, percentage);
  }

  generateDiscountCode(percentage:string) {
    // Função para gerar letras aleatórias
    function generateRandomLetters(length: number) {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
      }
      return result;
    }
  
    // Obtém a data no formato ddmmyy
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, ''); // Remove as barras da data
  
    // Remove o símbolo % do desconto
    const cleanPercentage = percentage.replace('%', '');
  
    // Gera o código com base nas especificações
    const code = `DsN${formattedDate}-${cleanPercentage}-${generateRandomLetters(6)}`;
    return code;
  }
  
  extractValueFromCode(discountCode: string): string | null {
    const regex = /-(\d+)-/;
    const match = discountCode.match(regex);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }
  

  percentOdDisconut = ['1%', '2%','2%','2%','2%', '2%','2%','2%','3%','3%','3%','3%','3%','3%', '4%', '5%'];

  sortearString() {
    if(this.getCookie(this.cookieD) === '' && this.getCookie(this.cookieC) === ''){
      const indiceSorteado = Math.floor(Math.random() * this.percentOdDisconut.length);
      this.descountCode = this.generateDiscountCode(this.percentOdDisconut[indiceSorteado]);
      this.percentOdDisconutSorted = this.percentOdDisconut[indiceSorteado];
      this.setCookie(this.cookieD,this.percentOdDisconutSorted);
      this.setCookie(this.cookieC,this.descountCode);
      
    }else{
      
      let code = this.getCookie(this.cookieC);
      this.descountCode  = code;
      let value = this.getCookie(this.cookieD);
      this.percentOdDisconutSorted = `Seu valor previamente sorteado foi de ${value}`;
    }

  }
}
