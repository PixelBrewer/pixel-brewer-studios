import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Experience } from '../experience/experience';
import { Gallery } from '../gallery/gallery';
import { Contact } from '../contact/contact';
import { Skills } from '../skills/skills';
import { Education } from '../education/education';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Experience, Gallery, Contact, Skills, Education],
  templateUrl: './about.html',
})
export class About {
  workLink: string = 'https://www.stcu.org';
}
