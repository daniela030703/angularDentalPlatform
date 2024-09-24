import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'layout-servicios',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicios = [
    {
      nombre: 'Limpieza Dental',
      descripcion: 'Eliminamos la placa y el sarro para mantener tus dientes sanos.',
      imgSrc: 'https://img.freepik.com/foto-gratis/dentista-sonrisa_144627-886.jpg'
    },
    {
      nombre: 'Blanqueamiento Dental',
      descripcion: 'Tratamiento para blanquear tus dientes y mejorar tu sonrisa.',
      imgSrc: 'https://img.freepik.com/foto-gratis/dentista-sonrisa_144627-891.jpg?t=st=1727150043~exp=1727153643~hmac=43c9d58a81b4557bbc8c4ff06fa8bf889baa5dfffaed97a79e773184a3c9c999&w=740'
    },
    {
      nombre: 'Endodoncia',
      descripcion: 'Tratamiento para salvar dientes dañados o infectados.',
      imgSrc: 'https://img.freepik.com/foto-gratis/paciente-mujer-dentista_1303-9364.jpg?t=st=1727150283~exp=1727153883~hmac=4c6888df12b17e6226a21beca57137f0562662a34a66baacaafe23bfdc7a3b9c&w=740'
    },
    {
      nombre: 'Ortodoncia',
      descripcion: 'Corrige la alineación de los dientes y mandíbulas.',
      imgSrc: 'https://img.freepik.com/foto-gratis/hermosa-mujer-joven-aparatos-dentales_155003-10309.jpg?t=st=1727150387~exp=1727153987~hmac=4d3b2b058c6784a02a7070772d222c27e169a62b145f60a5c420742c71ce1e2e&w=740'
    }
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.servicios.length;
    this.updateCarousel();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.servicios.length) % this.servicios.length;
    this.updateCarousel();
  }

  updateCarousel() {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
  }
}
