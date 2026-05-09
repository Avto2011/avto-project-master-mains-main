import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../services/api';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-trains',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './trains.html',
  styleUrl: './trains.scss'
})
export class Trains implements OnInit {

  trains: any[] = [];
  loading = false;
  error = false;

  constructor(
    private api: Api,
    private cdr: ChangeDetectorRef,
    private router: Router   
  ) {}

  ngOnInit(): void {
    const searchData = JSON.parse(localStorage.getItem('searchData') || '{}');

    if (!searchData.fromName) return;

    this.loading = true;

    this.api.getAll(
      `getdeparture?from=${searchData.fromName}&to=${searchData.toName}&date=${searchData.date}`
    ).subscribe({
      next: (resp: any) => {
        this.trains = Array.isArray(resp) ? resp : (resp.data || []);
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  selectTrain(train: any) {
    localStorage.setItem('selectedTrain', JSON.stringify(train));
    this.router.navigate(['/tickets']);
  }
}