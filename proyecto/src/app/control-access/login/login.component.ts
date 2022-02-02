import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AccessService } from '../access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!:string;
  password!:string;

  constructor(private accesoService:AccessService,private router: Router, ) { }

  ngOnInit(): void {
  }

  login(){
    console.log("hola");

    /*
    this.accesoService.login(this.email,this.password)
    .subscribe({
      next: (resp =>{
        localStorage.setItem('token',resp.access_token!)
        this.router.navigateByUrl('/coches');

    }),
      error: resp =>{
        console.log(resp);
        Swal.fire('Error', resp.error.message, 'error')
    }
    });
    */
  }


}
