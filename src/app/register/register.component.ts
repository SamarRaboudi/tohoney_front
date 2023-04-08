import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudServiceService } from '../Service/crud-service.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { User } from '../Model/User.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup
  userFile:any
  message?:String
  imgURL:any
  imagePath:any
  constructor(
    private service: CrudServiceService,
    private router: Router,
    private fb: FormBuilder,
    private toast:NgToastService
  ) {
    let formControls = {
      nom: new FormControl('', [
        Validators.required,

      ]),
      mdp: new FormControl('', [
        Validators.required,

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email

      ])


    }
    this.registerForm = this.fb.group(formControls)

  }
  get email() { return this.registerForm.get('email') }
  get nom() { return this.registerForm.get('nom') }
  get mdp() { return this.registerForm.get('mdp') }
  
  // onSelectFile(event: any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.userFile = file;
  

  //     var mimeType = event.target.files[0].type;
  //     if (mimeType.match(/image\/*/) == null) {
  //       this.message = 'Sauf les images sont acceptés.';
  //       return;
  //     }

  //     var reader = new FileReader();

  //     this.imagePath = file;
  //     reader.readAsDataURL(file);
  //     reader.onload = (_event) => {
  //       this.imgURL = reader.result;
  //     };
  //   }
  // }
  register() {
    let data = this.registerForm.value;
    console.log(data);
    let user = new User(
      undefined,data.nom,data.email, data.mdp );
       console.log(user);
    if(data.nom==0||data.email==0||data.mdp==0)
    {this.toast.info({
      detail:'error msg !!',
      summary:'remplir votre champs'
    });}else{
      
    this.service.registerUser(user).subscribe(

      res => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      err => {
        console.log(err);
        this.toast.error({
          detail:'error msg',
          summary:'verifier votre formulaire !'
        });

      }

    )
  }

  }

  ngOnInit(): void {
  }

}
