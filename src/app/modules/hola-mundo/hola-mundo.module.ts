import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolaMundoComponent } from './components/hola-mundo/hola-mundo.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: HolaMundoComponent
  }
];

RouterModule.forChild(routes)

@NgModule({
  declarations: [HolaMundoComponent],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    HolaMundoComponent
  ]
  
})
export class HolaMundoModule { }
