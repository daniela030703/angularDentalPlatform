import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor( private _router: Router) { }

  logout(): void {
    // Aquí manejas el cierre de sesión
    localStorage.removeItem('currentUser'); // Simulación de cierre de sesión
    this._router.navigate(['/']); // Redirigir al login
  }
  
}
