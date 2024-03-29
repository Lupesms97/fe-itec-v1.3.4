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
import { CollaboratorNavbarComponent } from 'src/app/shared/collaborator-navbar/collaborator-navbar.component';
import { CollaboratorAdminNavbarComponent } from 'src/app/shared/collaborator-admin-navbar/collaborator-admin-navbar.component';
import { ResetComponent } from './reset/reset.component';
import { OmbudsmanComponent } from './ombudsman/ombudsman.component';
import { hasRequiredRoleGuard } from 'src/app/core/guard/has-required-role.guard';
import { Role } from 'src/app/shared/models/ERole';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    MinhaCarteiraComponent,
    NavbarAdminComponent,
    LoginComponent,
    CandidateInformationBankComponent,
    CollaboratorNavbarComponent,
    CollaboratorAdminNavbarComponent,
    ResetComponent,
    OmbudsmanComponent,
    DashboardPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(
      [
        {path:'', redirectTo: 'login', pathMatch: 'full'},
        {path:'login', component: LoginComponent},
        {path:'reset', component: ResetComponent},
        {path:'home', component: HomeComponent,canActivate:  [loggedGuard, hasRequiredRoleGuard], data:{role:[ Role.USER]}},
        {path:'minha-carteira', component: MinhaCarteiraComponent,canActivate:  [loggedGuard, hasRequiredRoleGuard], data:{role:[ Role.USER]}},
        {path:'banco-de-candidatos', component: CandidateInformationBankComponent,canActivate:  [loggedGuard, hasRequiredRoleGuard], data:{role:[Role.ADMIN]}},
        {path:'dashboard', component: DashboardPageComponent,canActivate:  [loggedGuard, hasRequiredRoleGuard], data:{role:[Role.ADMIN]}},
        {path:'resposta-ouvidoria', component: OmbudsmanComponent ,canActivate:  [loggedGuard, hasRequiredRoleGuard], data:{role:[Role.ADMIN]} }
      ]
    ),
    NgxPaginationModule,
    ComponentsModule,


  ]
})
export class ColaboradorModule { }
