import { Component } from '@angular/core';
import { Education } from '../education/education';
import { Experience } from '../experience/experience';
import { Gallery } from '../gallery/gallery';
import { Contact } from '../contact/contact';
import { Skills } from '../skills/skills';

@Component({
  selector: 'app-about',
  imports: [Experience, Gallery, Contact, Skills, Education],
  templateUrl: './about.html',
})
export class About {
  workLink: string = 'https://stcu.org/';
}
