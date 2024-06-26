import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s 500ms ease-in', style({ opacity: 1 })), // 500ms delay
      ]),
    ]),
    trigger('fadeOut', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
  imports: [CommonModule],
})
    
export class LandingPageComponent implements OnInit {
  get imagePath() {
    return 'assets/image.jpg';
  }

  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2300); 
  }
}
