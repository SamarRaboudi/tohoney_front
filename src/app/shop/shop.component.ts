import { Component } from '@angular/core';
import { Products } from '../Model/Products.model';
import { CrudServiceService } from '../Service/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  nbrProd:number=0
  nbrProd1:number=0
  nbrProd2:number=0
  page:number=1
  liste : Products[]=[]
  liste2:Products[]=[]
  liste3:Products[]=[]
  constructor(
    private service:CrudServiceService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe(prod=>{
      this.liste=prod
      this.nbrProd=prod.length
      this.liste3=this.liste.filter(prod=>prod.categorie=="Oil")
      // this.nbrProd1=this.liste3.length
      this.liste2=this.liste.filter(prod=>prod.categorie=="Honey")
      // this.nbrProd2=this.liste3.length
    })
  }
}
