import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumenRoutingModule } from './resumen-routing.module';
import { ResumenComponent } from './resumen.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ResumenComponent
  ],
  imports: [
    CommonModule,
    ResumenRoutingModule,
    FontAwesomeModule
  ]
})
export class ResumenModule { }
