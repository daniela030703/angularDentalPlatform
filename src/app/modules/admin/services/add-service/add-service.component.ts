import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [  MatFormFieldModule,
              MatInputModule,
              MatButtonModule,
              ReactiveFormsModule,
              MatIconModule],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css'
})
export class AddServiceComponent {
  servicioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.servicioForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0)]],
      descripcion: ['', Validators.required],
      encargado: ['', Validators.required],
      imagen: [null]
    });
  }

  ngOnInit(): void {}

  agregarServicio() {
    if (this.servicioForm.valid) {
      const servicio = this.servicioForm.value;
      console.log('Servicio agregado:', servicio);
      this.limpiarFormulario();
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.servicioForm.patchValue({ imagen: input.files[0] });
    }
  }

  limpiarFormulario() {
    this.servicioForm.reset();
  }
}
