import { ListarComponent } from './professores/listar/listar.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'professores', component: ListarComponent},
  {path: 'professores/:id', component: ListarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
