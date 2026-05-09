import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../services/tickets';
import { RouterLink } from '@angular/router';

interface Passenger {
  seatId: string;
  seatLabel?: string;
  seatPrice?: number;
  firstName: string;
  lastName: string;
  idNumber: string;
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss',
})
export class Tickets implements OnInit {

  train: any = null;
  loading = false;
  error = '';

  email = '';
  phone = '';
  agreeToTerms = false;

  selectedVagonId: number | null = null;

  passengers: Passenger[] = [
    { seatId: '', seatLabel: '', seatPrice: 0, firstName: '', lastName: '', idNumber: '' },
    { seatId: '', seatLabel: '', seatPrice: 0, firstName: '', lastName: '', idNumber: '' },
  ];

  availableSeats: any[] = [];
  showSeatPopup = false;
  currentPassengerIndex: number | null = null;

  constructor(
    private api: TicketService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const data = localStorage.getItem('selectedTrain');
    const searchData = JSON.parse(localStorage.getItem('searchData') || '{}');

    if (data) this.train = JSON.parse(data);

    const passengerCount = Number(searchData.passengerCount) || 1;

    this.passengers = Array.from({ length: passengerCount }, () => ({
      seatId: '',
      seatLabel: '',
      seatPrice: 0,
      firstName: '',
      lastName: '',
      idNumber: '',
    }));
  }



  chooseSeat(index: number): void {
    if (!this.selectedVagonId) return;

    this.currentPassengerIndex = index;

    this.api.getVagonSeats(Number(this.selectedVagonId)).subscribe({
      next: (res: any) => {
        const vagon = res?.[0];

        if (!vagon?.seats) {
          this.error = 'ვაგონი არ მოიძებნა';
          return;
        }

        this.availableSeats = vagon.seats.filter((s: any) => !s.isOccupied);

        if (!this.availableSeats.length) {
          this.error = 'თავისუფალი ადგილი არ არის';
          return;
        }

        this.showSeatPopup = true;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'ადგილების ჩატვირთვა ვერ მოხერხდა';
      }
    });
  }

  selectSeat(seat: any): void {
    if (this.currentPassengerIndex === null) return;

    const i = this.currentPassengerIndex;

    this.passengers[i] = {
      ...this.passengers[i],
      seatId: seat.id || seat.seatId,
      seatLabel: seat.number,
      seatPrice: Number(seat.price) || 0,
    };

    this.passengers = [...this.passengers];

    this.closeSeatPopup();
  }

  closeSeatPopup(): void {
    this.showSeatPopup = false;
    this.availableSeats = [];
    this.currentPassengerIndex = null;
  }



get total(): number {
  return this.passengers.reduce((sum, p) => sum + (Number(p.seatPrice) || 0), 0);
}



  register(): void {

    if (!this.train) return;

    const valid = this.passengers.filter(p => p.seatId);

    if (!valid.length) {
      alert('აირჩიეთ მინიმუმ ერთი ადგილი');
      return;
    }

    const payload = {
      trainId: this.train.id,
      date: new Date().toISOString(),
      email: this.email,
      phoneNumber: this.phone,
      people: valid.map(p => ({
        seatId: p.seatId,
        name: p.firstName,
        surname: p.lastName,
        idNumber: p.idNumber,
        status: 'active',
        payoutCompleted: false,
      })),
    };

    this.api.bookTicket(payload).subscribe({
      next: (res: string) => {
        alert(res);
      },
      error: () => {
        alert('რეგისტრაცია ვერ მოხერხდა');
      }
    });
  }
}