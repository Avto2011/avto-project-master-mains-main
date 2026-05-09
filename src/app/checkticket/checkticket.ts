import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Api } from '../services/api';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-checkticket',
  standalone: true,
  imports: [RouterLink, FormsModule, NgClass,CommonModule],
  templateUrl: './checkticket.html',
  styleUrls: ['./checkticket.scss'],
})
export class Checkticket {

  constructor(private api: Api) {}

  ticketId = '';
  ticket: any;
  error = '';

  checkTicket() {
    this.api.checkStatus(this.ticketId).subscribe({
      next: (res: any) => {
        this.ticket = res;
        this.error = '';
      },
      error: () => {
        this.error = 'ბილეთი ვერ მოიძებნა';
        this.ticket = null;
      }
    });
  }

  cancelTicket() {
    this.api.cancelTicket(this.ticketId).subscribe({
      next: () => {
        alert('ბილეთი გაუქმდა');
        this.checkTicket();
      }
    });
  }
}