import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { ModalComponent } from './components/modal/modal.component';
import { CollaboratorNavbarComponent } from './shared/collaborator-navbar/collaborator-navbar.component';
import { CollaboratorAdminNavbarComponent } from './shared/collaborator-admin-navbar/collaborator-admin-navbar.component';

@NgModule({
  declarations: [
    AppComponent,

    
  ],
  imports: [
    ModalComponent,
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
