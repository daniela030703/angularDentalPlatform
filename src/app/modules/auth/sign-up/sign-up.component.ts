import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthService } from '../../../services/auth.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatSnackBarModule, RouterLink, NgIf, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm: FormGroup | any;
  showAlert: boolean = false;

  /**
   * Constructor
   */
  constructor(
      private _formBuilder: FormBuilder,private authService: AuthService, private snackBar: MatSnackBar, private router: Router
  )
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // Create the form
      this.signUpForm = this._formBuilder.group({
              name      : ['', Validators.required],
              email     : ['', [Validators.required, Validators.email]],
              password  : ['', Validators.required]
          },
      );
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign in
   */
  signUp(): void
  {
    const formValue = this.signUpForm.value;
    if (this.authService.signUp(formValue)) {
      this.snackBar.open('Registro exitoso', 'Cerrar', {
        duration: 3000, 
      });

      setTimeout(() => {
        this.router.navigate(['/sign-in']); 
      }, 3000); 

    } else {
      this.snackBar.open('El usuario ya existe.', 'Cerrar', {
        duration: 3000,
      });
    }
  }
}
