import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-about',
  imports: [
    ExperienceComponent,
    GalleryComponent,
    ContactComponent,
    SkillsComponent,
  ],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
