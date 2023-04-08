import { Component } from '@angular/core';
import { CrudServiceService } from '../Service/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user:any
  currentuser:any
    constructor(
      private service: CrudServiceService,
      private router: Router,
    ) {
   
     }
  
    ngOnInit(): void {
      this.user=localStorage.getItem("user")
      if(this.user=='USER')
     {  this.service.getUserById(this.service.userDetail().id).subscribe(user=>{
        this.currentuser=user
    })}
  }
    
    logOut(){
      localStorage.clear()
      this.router.navigate(["/home"])
      window.location.reload()
  
    }
  
}
