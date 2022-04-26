import { ReactiveFormsModule } from '@angular/forms';
import { MostrarMensagemComponent } from './mostrar-mensagem/mostrar-mensagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MostrarMensagemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MostrarMensagemComponent,
    ReactiveFormsModule

  ]
})
export class SharedModule { }
