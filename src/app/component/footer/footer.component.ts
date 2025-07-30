import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [MatGridListModule, MatDividerModule, RouterModule],
  templateUrl: './footer.component.html',
  styles: ``
})

export class FooterComponent {
  currentYear = new Date().getFullYear();

}
