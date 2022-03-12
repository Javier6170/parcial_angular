import { RouterModule, Routes } from "@angular/router";
import { ConversionGradosComponent } from "./components/conversion-grados/conversion-grados.component";
import { HomeComponent } from "./components/home/home.component";
import { ParqueaderoComponent } from "./components/parqueadero/parqueadero.component";



const APP_ROUTES: Routes= [
    {path:'home', component: HomeComponent},
    {path:'parqueadero', component: ParqueaderoComponent},
    {path:'conversion', component: ConversionGradosComponent},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);