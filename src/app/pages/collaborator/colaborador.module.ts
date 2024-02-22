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
import { CandidateInformationBankComponent } from './candidate-information-bank/candidate-information-bank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CollaboratorNavbarComponent } from 'src/app/shared/collaborator-navbar/collaborator-navbar.component';
import { CollaboratorAdminNavbarComponent } from 'src/app/shared/collaborator-admin-navbar/collaborator-admin-navbar.component';
import { ResetComponent } from './reset/reset.component';



@NgModule({
  declarations: [
    HomeComponent,
    MinhaCarteiraComponent,
    NavbarAdminComponent,
    LoginComponent,
    CandidateInformationBankComponent,
    DashboardComponent,
    CollaboratorNavbarComponent,
    CollaboratorAdminNavbarComponent,
    ResetComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(
      [
        {path:'', redirectTo: 'login', pathMatch: 'full'},
        {path:'login', component: LoginComponent},
        {path:'home', component: HomeComponent, canActivate:  [loggedGuard]},
        {path:'minha-carteira', component: MinhaCarteiraComponent,canActivate:  [loggedGuard]},
        {path:'banco-de-candidatos', component: CandidateInformationBankComponent,canActivate:  [loggedGuard]},
        {path:'dashboard', component: HomeComponent,canActivate:  [loggedGuard]},
        {path:'reset', component: ResetComponent}
      ]
    ),
    NgxPaginationModule,
    ComponentsModule,


  ]
})
export class ColaboradorModule { }
