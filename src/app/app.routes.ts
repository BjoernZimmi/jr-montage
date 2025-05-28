import { Routes } from '@angular/router';
import { ImpressumComponent } from './component/impressum/impressum.component';
import { StartpageComponent } from './component/startpage/startpage.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: StartpageComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
