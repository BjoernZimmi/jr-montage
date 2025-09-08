import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-leistungen',
  imports: [MatExpansionModule, RouterLink],
  templateUrl: './leistungen.component.html'
})
export class LeistungenComponent {

  services = [
    {
      id: 'fussboden',
      title: 'Fußbodenverlegung',
      intro: 'Verlegen von Laminat, Vinyl und Parkett – sauber, präzise und zuverlässig.',
      image: 'assets/img/fussboden.jpg',
      points: [
        'Untergrundprüfung & Vorbereitung',
        'Schwimmend oder verklebt, sauber zugeschnitten',
        'Leisten & Übergangsprofile, Randlösungen'
      ],
      gallery: [
        { src: 'assets/img/fussboden_detail.jpg', alt: 'Kleberbett – Detail' },
        { src: 'assets/img/fussboden_raum.jpg',   alt: 'Fertig verlegter Eichenboden' }
      ]
    },
    {
      id: 'terrasse',
      title: 'Terrassenbau & Gartenhaus',
      intro: 'Holzterrassen inkl. Unterkonstruktion – robust, eben und wetterfest.',
      image: 'assets/img/terrasse.jpg',
      points: [
        'Stabile Unterkonstruktion mit Gefälle',
        'Holz & WPC-Dielen, verdeckte Verschraubung möglich',
        'Pflege / Ölen auf Wunsch',
        'Aufbau & Montage von Gartenhäusern'
      ],
      gallery: [
        { src: 'assets/img/gartenhaus.jpg',  alt: 'Terrasse mit Sitzgruppe' },
        { src: 'assets/img/dielen.jpg', alt: 'Dielen – Detail' }
      ]
    },
    {
      id: 'sichtschutz',
      title: 'Sichtschutz aus Holz & WPC',
      intro: 'Individuelle Sichtschutzelemente – stabil montiert und genau ausgerichtet.',
      image: 'assets/img/sichtschutz.jpg',
      points: [
        'Pfostenanker / Fundamentlösung',
        'Maßanpassungen & Ausschnitte'
      ],
      gallery: [
        { src: 'assets/img/sichtschutz_1.jpg', alt: 'Sichtschutz mit Metallpfosten' },
        { src: 'assets/img/sichtschutz_2.jpg', alt: 'Sichtschutz auf Mauer' }
      ]
    }
  ];
}
