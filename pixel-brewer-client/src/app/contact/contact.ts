import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './contact.html',
})
export class Contact {
  email: string = 'PixelBrewer@protonmail.com';
  githubUrl: string = 'https://www.github.com/PixelBrewer';
  linkedInUrl: string = 'https://www.linkedin.com/in/alexanderjblair/';
}
