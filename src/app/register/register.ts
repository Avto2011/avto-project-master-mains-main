import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../services/api';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  constructor(private api : Api, private router : Router, private cdr : ChangeDetectorRef){
    
  }

  showVerifyInput : boolean = false;
  code  =  ""
  email = ""


 verify() {
  this.api.verify({ Email: this.email, Code: this.code }).subscribe({
    next: () => this.router.navigate(['/login']),
    error: (er: any) => {
      console.log('Verify error:', er.error);
      alert(er.message);
    }
  });
}

  register(form: any) {
  this.api.register(form).subscribe({
    next: (resp: any) => {
      console.log(resp);

      this.email = form.email; 
      this.showVerifyInput = true;
    },
    error: er => alert(er.message)
  });
}

}
