import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
})
export class Contact {
  email: string = 'PixelBrewer@protonmail.com';
  githubUrl: string = 'https://www.github.com/PixelBrewer';
  linkedInUrl: string = 'https://www.linkedin.com/in/alexanderjblair/';

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  constructor() {}

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
