import { Component } from '@angular/core';
import { IFormsData } from 'src/app/shared/models/IFormsData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  p:number = 0;
  lists = []

  user:IFormsData = {
    contacted: false,
    cratedAt: new Date(),
    name: 'Felipe',
    email: 'lupe@sms97@gmail.com',
    polo: 'Vila-VR',
    phone: '(24) 999039239',
    course: 'Ciência da Computação ',
    cupom: 'asdaskdj-dasdasd',

  }
  userData: IFormsData[] = [
    {
      contacted: false,
      cratedAt: new Date(),
      name: 'Felipe',
      email: 'lupe@sms97@gmail.com',
      polo: 'Vila-VR',
      phone: '(24) 999039239',
      course: 'Ciência da Computação',
      cupom: 'asdaskdj-dasdasd',
    },
    {
      contacted: true,
      cratedAt: new Date(),
      name: 'Ana',
      email: 'ana@example.com',
      polo: 'Centro-RJ',
      phone: '(21) 987654321',
      course: 'Engenharia Civil',
      cupom: 'qweqw-tyuio',
    },
    {
      contacted: false,
      cratedAt: new Date(),
      name: 'Carlos',
      email: 'carlos@example.com',
      polo: 'Botafogo-RJ',
      phone: '(22) 123456789',
      course: 'Administração',
      cupom: 'zxcvbnm-asdfgh',
    },
    {
      contacted: true,
      cratedAt: new Date(),
      name: 'Larissa',
      email: 'larissa@example.com',
      polo: 'Copacabana-RJ',
      phone: '(23) 111223344',
      course: 'Psicologia',
      cupom: 'qwertyu-123456',
    },
    {
      contacted: false,
      cratedAt: new Date(),
      name: 'Eduardo',
      email: 'eduardo@example.com',
      polo: 'Niterói-RJ',
      phone: '(25) 876543210',
      course: 'Arquitetura',
      cupom: 'poiuytrewq-987654',
    },
    {
      contacted: true,
      cratedAt: new Date(),
      name: 'Mariana',
      email: 'mariana@example.com',
      polo: 'Barra da Tijuca-RJ',
      phone: '(26) 555666777',
      course: 'Biologia',
      cupom: 'mnbvcxz-lkjhgf',
    },
    // Adicione mais objetos conforme necessário
  ];
}
