import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../services/api';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../authservice/authservice';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
    constructor(private api: Api, private router: Router,private auth:AuthService) {}

login(form: any) {
  this.api.login(form).subscribe({
    next: (res: any) => {
      this.auth.login(res.token);
      this.router.navigate(['/']);
    },
    error: (err) => alert(err.error?.message || 'Login failed')
  });
}
}
