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
  number=1;
  nbrProd:number=0
  nbrProd1:number=0
  nbrProd2:number=0
  page:number=1
  liste : Products[]=[]
  liste2:Products[]=[]
  liste3:Products[]=[]
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
      window.scroll(0,0);
      this.user=localStorage.getItem("user")
      this.id=this.rout.snapshot.params["id"]
      this.getProd(this.id);
      this.service.getProduct().subscribe(prod=>{
        this.liste=prod
        this.nbrProd=prod.length
        this.liste3=this.liste.filter(prod=>prod.categorie=="Oil")
        // this.nbrProd1=this.liste3.length
        this.liste2=this.liste.filter(prod=>prod.categorie=="Honey")
        // this.nbrProd2=this.liste3.length
      })
     }
     getProd(id:number)
     {
         this.service.getProdutById(id).subscribe(data=>{
         this.currentProd=data
   
       })
     } 
     inc(){
      this.number++;
      }
      
      dec(){
      this.number--;
      }
   }