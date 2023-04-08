import { Component } from '@angular/core';
import { Products } from '../Model/Products.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { CrudServiceService } from '../Service/crud-service.service';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent {
  token:any
  id: any;
  currentProd=new Products()
  user:any;
   constructor(
        private service: CrudServiceService,
       private router: Router,
       private fb: FormBuilder,
       private toast:NgToastService,
       private rout:ActivatedRoute)
        { 
        this.user=this.service.userDetail()
       }
  

     ngOnInit(): void {
      this.user=localStorage.getItem("user")
      this.id=this.rout.snapshot.params["id"]
      this.getProd(this.id);
     }
     getProd(id:number)
     {
         this.service.getProdutById(id).subscribe(data=>{
         this.currentProd=data
   
       })
     } 
   }