import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="happy banking with us"
  data2="Enter account no :"

  
  login(){
    alert("login clicked")
  }

  acnoChange(event:any){
    console.log(event.target.value);
    
  }

  passChange(event:any){
    console.log(event.target.value);
    
  }
}
