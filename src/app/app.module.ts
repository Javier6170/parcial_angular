import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParqueaderoComponent } from './components/parqueadero/parqueadero.component';
import { ConversionGradosComponent } from './components/conversion-grados/conversion-grados.component';
import { FormsModule } from '@angular/forms';
import { ResultadoGradosComponent } from './components/resultado-grados/resultado-grados.component';
import { FormGradosComponent } from './components/form-grados/form-grados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ParqueaderoComponent,
    ConversionGradosComponent,
    ResultadoGradosComponent,
    FormGradosComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
