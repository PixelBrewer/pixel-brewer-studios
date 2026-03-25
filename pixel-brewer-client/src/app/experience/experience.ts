import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './experience.html',
})
export class Experience {
  stcuLink: string = 'https://stcu.org/';
  avistaLink: string = 'https://myavista.com/';
}
