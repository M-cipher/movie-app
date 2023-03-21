import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorFromSignUp: string = '';
  isLoading: boolean = false
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(15), Validators.max(30)]),

  })

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }


  registerUser(form: FormGroup) {
    if (form.valid) {
      this.isLoading = true
      this._authService.signUp(form.value).subscribe({
        next: (data: any) => {
          if (data.message == "success") {
            // TODO: go to login
            this.isLoading = false
            this._router.navigate(['/login']);

          } else {
            this.errorFromSignUp = data.message
          }
        }

      })
    }


  }

}
