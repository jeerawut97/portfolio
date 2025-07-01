import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { ProjectsComponent } from './components/projects/projects';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}
