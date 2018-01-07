import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, ChartComponent],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
