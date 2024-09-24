import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../layouts/footer/footer.component';
import { NavComponent } from '../layouts/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { UsComponent } from './us/us.component';

@Component({
  selector: 'app-web-page',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, HomeComponent, UsComponent],
  templateUrl: './web-page.component.html',
  styleUrl: './web-page.component.css'
})
export class WebPageComponent {

}
