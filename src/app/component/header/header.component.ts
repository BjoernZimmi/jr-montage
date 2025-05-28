import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, RouterLink, MatSidenavModule, MatListModule, MatListItem, MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {}
