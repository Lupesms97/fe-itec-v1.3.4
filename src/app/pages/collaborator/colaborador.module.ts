import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentsModule } from 'src/app/components/components.module';
import { MinhaCarteiraComponent } from './minha-carteira/minha-carteira.component';
import { NavbarAdminComponent } from 'src/app/shared/navbar-admin/navbar-admin.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { loggedGuard } from 'src/app/core/guard/logged.guard';



@NgModule({
  declarations: [
    HomeComponent,
    MinhaCarteiraComponent,
    NavbarAdminComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(
      [
        {path:'', redirectTo: 'login', pathMatch: 'full'},
        {path:'login', component: LoginComponent},
        {path:'home', component: HomeComponent/* , canActivate:  [loggedGuard] */},
        {path:'minha-carteira', component: MinhaCarteiraComponent/* ,canActivate:  [loggedGuard] */},
       
      ]
    ),
    NgxPaginationModule,
    ComponentsModule,


  ]
})
export class ColaboradorModule { }
