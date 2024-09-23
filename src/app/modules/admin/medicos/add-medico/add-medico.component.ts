import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-add-medico',
  standalone: true,
  imports: [ MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule ,
    MatDatepickerModule ],
  templateUrl: './add-medico.component.html',
  styleUrl: './add-medico.component.css'
})
export class AddMedicoComponent {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      fechaNacimiento: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Puedes realizar otras inicializaciones si es necesario
  }

  agregarUsuario(): void {
    if (this.usuarioForm.valid) {
      console.log('Formulario válido', this.usuarioForm.value);
      // Aquí puedes hacer la lógica para enviar el formulario, como una llamada a un servicio
    } else {
      console.log('Formulario no válido', this.usuarioForm.errors);
    }
  }
}
