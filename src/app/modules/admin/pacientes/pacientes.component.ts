import { Component } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent {
  displayedColumns: string[] = ['id', 'name', 'age'];
  data = [
    { id: 1, name: 'Juan Pérez', age: 30 },
    { id: 2, name: 'Ana Gómez', age: 25 },
  ];
}
