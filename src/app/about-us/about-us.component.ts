import { Component } from '@angular/core';
import { Products } from '../Model/Products.model';
import { CrudServiceService } from '../Service/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  nbrProd:number=0
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
      this.liste3=this.liste.filter(prod=>prod.categorie=="oil")
      this.liste2=this.liste.filter(prod=>prod.categorie=="honey")
    })
  }

}
