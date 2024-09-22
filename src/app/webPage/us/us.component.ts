import { Component } from '@angular/core';
import { InfoUsComponent } from '../../layouts/info-us/info-us.component';
import { TestimoniosComponent } from '../../layouts/testimonios/testimonios.component';
import { TeamComponent } from '../../layouts/team/team.component';

@Component({
  selector: 'us',
  standalone: true,
  imports: [InfoUsComponent, TestimoniosComponent, TeamComponent],
  templateUrl: './us.component.html',
  styleUrl: './us.component.css'
})
export class UsComponent {

}
