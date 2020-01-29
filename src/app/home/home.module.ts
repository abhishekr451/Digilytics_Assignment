import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { homeRoute } from './home.routes'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    homeRoute
  ]
})
export class HomeModule { }
