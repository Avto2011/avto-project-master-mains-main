import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Error } from "./error/error";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Error,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('avto-project');
}
