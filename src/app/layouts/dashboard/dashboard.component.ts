import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  salir(): void {
    this.auth.logout();
    this.router.navigate(['welcome']);
  }

}
