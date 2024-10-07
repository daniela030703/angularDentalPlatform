import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [ NgIf, RouterLink, MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent implements OnInit {
  signInForm: FormGroup | any;

  /**
   * Constructor
   */
  constructor(private _formBuilder: FormBuilder, private authService: AuthService, private _router: Router, private snackBar: MatSnackBar,) {}

  ngOnInit(): void {
    // Crear el formulario
    this.signInForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  signIn(){
    if (this.signInForm.valid) {
      const formValue = this.signInForm.value;
      if (this.authService.login(formValue)) {
        this.snackBar.open('Ingreso exitoso', 'Cerrar', {
          duration: 3000, 
        });
  
        setTimeout(() => {
          this._router.navigate(['/dashboard']);
        }, 3000); 
  
        
      } else {
        this.snackBar.open('Ingreso Fallido', 'Cerrar', {
          duration: 3000, 
        });
      }
 

    } else {
      this.snackBar.open('El formulario no es válido', 'Cerrar', {
        duration: 3000, 
      });
    }
  }
}

