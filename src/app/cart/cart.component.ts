import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  number=1;
  inc(){
  this.number++;
  }
  
  dec(){
  this.number--;
  }
}
