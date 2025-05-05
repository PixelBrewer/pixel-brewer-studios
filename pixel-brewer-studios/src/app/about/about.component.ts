import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-about',
  imports: [ExperienceComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
