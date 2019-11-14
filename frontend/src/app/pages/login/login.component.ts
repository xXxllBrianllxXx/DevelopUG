import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  @ViewChild('user', {static: true}) user: ElementRef;
  @ViewChild('pass', {static: true}) pass: ElementRef;

  constructor( private router: Router, private loginService: LoginService, private toastr: ToastrService ) { }

  ngOnInit() {
  }

  login() {
    const data = {
      user: this.user.nativeElement.value,
      pass: this.pass.nativeElement.value
    };

    this.loginService.login(data).subscribe( resp => {
      if (resp.success) {
        localStorage.setItem('token', resp.data.token);
        location.reload();
      } else {
        this.toastr.warning(resp.msg);
      }
    }, err => {
      console.log(err.error.msg);
    });
  }

}
