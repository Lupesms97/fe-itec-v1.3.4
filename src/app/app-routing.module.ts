import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule) },
  {path:'colaborador', loadChildren: () => import('./pages/collaborator/colaborador.module').then(m => m.ColaboradorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
