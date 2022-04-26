import { SharedModule } from './../shared/shared.module';
import { ProfessoresRoutingModule } from './professores-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfessorFormComponent } from './professor-form/professor-form.component';



@NgModule({
  declarations: [
    ListarComponent,
    ProfessorFormComponent
  ],
  imports: [
    CommonModule,
    ProfessoresRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    ListarComponent
  ]
})
export class ProfessoresModule { }
