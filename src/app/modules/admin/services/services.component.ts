import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

export interface ServiceData {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource: MatTableDataSource<ServiceData>;

 @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor() {
    // Datos de ejemplo para los servicios
    const services = [
      { id: 1, name: 'Limpieza Dental', description: 'Limpieza profesional de dientes.' },
      { id: 2, name: 'Blanqueamiento Dental', description: 'Tratamiento para blanquear los dientes.' },
      { id: 3, name: 'Implantes Dentales', description: 'Implantes para dientes perdidos.' },
      // Añade más servicios según sea necesario
    ];

    // Asignar los datos a la fuente de datos para que la tabla se renderice
    this.dataSource = new MatTableDataSource(services);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
