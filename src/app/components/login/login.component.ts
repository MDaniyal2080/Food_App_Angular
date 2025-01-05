import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, } from '@angular/router';
import ValidateForm from '../../helpers/ValidateForm';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  loader = true;
  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    })

    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  get Email() {
    return this.login.controls['email']
  }

  get Password() {
    return this.login.controls['password']
  }

  onSubmit(login: FormGroup) {
    if (this.login.valid) {
      this.http.get<any>("http://localhost:3000/Users")
        .subscribe(res => {
          const user = res.find((a: any) => {
            return a.email === this.login.value.email && a.password === this.login.value.password
          });
          if (user) {
            alert('Successfully logged in')
            this.login.reset();
            this.router.navigate(['home'])
          }
          else {
            alert('user not found')
          }
        }, err => {
          alert('something went wrong')
        })
    }
    else {
      alert('Form is Invalid')
    }
  }
}