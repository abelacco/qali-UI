import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) { }

  login() {
    // Aquí iría el código para la autenticación del usuario

    // Si la autenticación es exitosa, navega al dashboard
    this.router.navigate(['/dashboard']);
  }

}
