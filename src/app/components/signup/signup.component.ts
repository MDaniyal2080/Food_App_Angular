import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import ValidateForm from '../../helpers/ValidateForm';
import { HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, ToastrModule,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  signupUser: any;
  loader = true;
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.signup = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  get fullName() {
    return this.signup.controls['fullName']
  }

  get Email() {
    return this.signup.controls['email']
  }

  get Password() {
    return this.signup.controls['password']
  }


  onSubmit(signup: FormGroup) {
    if (this.signup.valid) {
      this.signupUser = this.signup.value.fullName
      this.http.post<any>("http://localhost:3000/Users", this.signup.value)
        .subscribe(res => {
          alert(this.signupUser + " are successfully signup");
          this.signup.reset();
          this.router.navigate(['login']);
        }),
        err => {
          alert('something went wrong');
        }

    }
    else {
      alert('Form is Invalid')
    }
  }
}

