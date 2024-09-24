import { Component, OnInit } from '@angular/core';
import { SectionContactComponent } from '../../layouts/section-contact/section-contact.component';
import { ContactCardComponent } from '../../layouts/contact-card/contact-card.component';
import { ServiciosComponent } from '../../layouts/servicios/servicios.component';
import { TestimoniosComponent } from '../../layouts/testimonios/testimonios.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [SectionContactComponent, ServiciosComponent, TestimoniosComponent, ContactCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }
    });
  }
}
