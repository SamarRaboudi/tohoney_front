import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { CrudServiceService } from '../Service/crud-service.service';
import { User } from '../Model/User.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  loginForm: FormGroup
  constructor(
    private service: CrudServiceService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService
  ) {
    let formControls = {
      mdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ])


    }
    this.loginForm = this.fb.group(formControls)

  }
  get email() { return this.loginForm.get('email') }
  get mdp() { return this.loginForm.get('mdp') }
  
 loginUser() {
    let data = this.loginForm.value;
    console.log(data);
    let user = new User(  undefined,undefined,data.email,data.mdp,);
       console.log(user);
    if(data.email==0||data.mdp==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'remplir votre champs'
    });}else{
      
    this.service.loginUser(user).subscribe(

      res => {
        console.log(res);
        let token=res.token;
        localStorage.setItem("mytoken",token);
        localStorage.setItem("user","USER");
        this.router.navigate(['/home']);
      },
      err => {
        console.log(err);
        this.toast.error({
          detail:'error msg',
          summary:'admin introuvable !!!!'
        });

      }

    )
  }

  }
  ngOnInit(): void {
  }

}



 

