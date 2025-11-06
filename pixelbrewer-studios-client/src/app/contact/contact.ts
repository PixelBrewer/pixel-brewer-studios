import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
})
export class Contact {
  email: string = 'pixelbrewer@protonmail.com';
  githubUrl: string = 'https://github.com/PixelBrewer';
  linkedInUrl: string = 'https://www.linkedin.com/in/alexanderjblair/';
}
