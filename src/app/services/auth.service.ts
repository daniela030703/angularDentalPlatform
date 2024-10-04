import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(user: any): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((u: any) => u.email === user.email);
    if (!userExists) {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return true; // Sign-up exitoso
    } else {
      return false; // Usuario ya existe
    }
  }

  login(user: { email: string, password: string }): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((u: any) => u.email === user.email && u.password === user.password);
    if (foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      return true; // Login exitoso
    } else {
      return false; // Credenciales incorrectas
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}
