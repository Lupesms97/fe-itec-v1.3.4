import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { provideHttpClient, withJsonpSupport } from '@angular/common/http';

import { MapComponent } from './map.component';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [ComponentsModule],
  providers: [provideHttpClient(withJsonpSupport())]
})
export class MapModule { }
