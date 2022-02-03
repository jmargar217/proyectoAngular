import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!:string;
  password!:string;
  constructor(private serviceLogin:LoginService, private router: Router, ) { }

  ngOnInit(): void {
  }

  login(){
    this.serviceLogin.login(this.email,this.password)
    .subscribe({
      next: (resp =>{
        localStorage.setItem('token',resp.access_token!)
        this.router.navigateByUrl('coches');
      }),
      error: resp =>{
        console.log(resp);
        Swal.fire({
          title: 'Sus datos no son correctos',
          text: 'Vuelva a intentarlo',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }

    })

  }

}
