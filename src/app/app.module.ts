import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { ModalComponent } from './components/modal/modal.component';
import ptBr from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);
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
    { provide: LOCALE_ID, useValue: 'pt' },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
