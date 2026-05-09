import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Api } from '../services/api';
import { AuthService } from '../authservice/authservice';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {


  stations: any[] = [];

  fromStation = '';
  toStation = '';
  date = '';
passengerCount: any;
// auth: any;

  constructor(private api: Api, private router: Router,public auth: AuthService) {}

  ngOnInit() {
    this.api.getAll('stations').subscribe({
      next: (resp: any) => {
        this.stations = resp;
      },
      error: (err) => console.error(err)
    });
  }

  search() {
    if (!this.fromStation || !this.toStation || !this.date) return;

    const passengerCount = Number(this.passengerCount) || 1;

    const searchData = {
      fromName: this.fromStation,
      toName: this.toStation,
      date: this.date,
      passengerCount,
    };

    localStorage.setItem('searchData', JSON.stringify(searchData));

    this.router.navigate(['/trains']);
  }
  logout() {
  this.auth.logout();
  this.router.navigate(['/login']);
}
}