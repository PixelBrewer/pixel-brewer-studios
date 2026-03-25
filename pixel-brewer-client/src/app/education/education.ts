import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './education.html',
})
export class Education {
  whitworthLink: string = 'https://www.whitworth.edu/';
}
