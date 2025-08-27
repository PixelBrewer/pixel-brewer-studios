import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('pixelbrewer-studios-client');
}
