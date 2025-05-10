import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  email: string = 'pixelbrewerstudios@gmail.com';
  githubUrl: string = 'https://github.com/PixelBrewer';
  linkedInUrl: string = 'https://www.linkedin.com/in/alexanderjblair/';
}
