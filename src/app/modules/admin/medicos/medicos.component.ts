import { Component } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [DataTableComponent],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.css'
})
export class MedicosComponent {
  displayedColumns: string[] = ['id', 'name', 'specialty'];
  data = [
    { id: 1, name: 'Dr. Smith', specialty: 'Dentista' },
    { id: 2, name: 'Dr. Johnson', specialty: 'Ortodoncia' },
  ];
}
