import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-about',
  imports: [ExperienceComponent, GalleryComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
