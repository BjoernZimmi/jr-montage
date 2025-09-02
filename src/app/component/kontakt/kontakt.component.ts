import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatenschutzComponent } from '../datenschutz/datenschutz.component';


@Component({
  selector: 'app-kontakt',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './kontakt.component.html'
})
export class KontaktComponent {
 private fb = inject(FormBuilder);
 private dialog = inject(MatDialog);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', Validators.required],
    privacy: [false, Validators.requiredTrue]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, subject, message } = this.contactForm.value;

      const mailto = `mailto:bjoernz@live.de?subject=${encodeURIComponent(subject || 'Kontaktformular')}&body=${encodeURIComponent(
        `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
      )}`;

      window.location.href = mailto;
    }
  }

    openPrivacyDialog(event: Event) {
    event.preventDefault(); // verhindert Standard-Navigation
    this.dialog.open(DatenschutzComponent, {
      width: '800px',
      maxHeight: '80vh'
    });
  }
}
