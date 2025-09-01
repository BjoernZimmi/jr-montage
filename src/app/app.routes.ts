import { Routes } from '@angular/router';
import { ImpressumComponent } from './component/impressum/impressum.component';
import { StartpageComponent } from './component/startpage/startpage.component';
import { LeistungenComponent } from './component/leistungen/leistungen.component';
import { KontaktComponent } from './component/kontakt/kontakt.component';

export const routes: Routes = [
  { path: '', component: StartpageComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'leistungen', component: LeistungenComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
