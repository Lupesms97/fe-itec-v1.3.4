import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentsModule } from 'src/app/components/components.module';
import { MinhaCarteiraComponent } from './minha-carteira/minha-carteira.component';
import { NavbarAdminComponent } from 'src/app/shared/navbar-admin/navbar-admin.component';



@NgModule({
  declarations: [
    HomeComponent,
    MinhaCarteiraComponent,
    NavbarAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'', redirectTo: 'home', pathMatch: 'full'},
        {path:'home', component: HomeComponent},
        {path:'minha-carteira', component: MinhaCarteiraComponent}
      ]
    ),
    NgxPaginationModule,
    ComponentsModule,


  ]
})
export class ColaboradorModule { }
