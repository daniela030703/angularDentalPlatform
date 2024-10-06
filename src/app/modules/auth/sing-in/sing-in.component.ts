import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [ NgIf, RouterLink, MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent implements OnInit {
  signInForm: FormGroup | any;

  /**
   * Constructor
   */
  constructor(private _formBuilder: FormBuilder, private authService: AuthService, private _router: Router) {}

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
        this._router.navigate(['/dashboard']);
      } else {
        console.log('fallo')
      }
 

    } else {
      console.log('El formulario no es válido');
    }
  }
}

