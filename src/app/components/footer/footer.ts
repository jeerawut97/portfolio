import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important for standalone components

@Component({
  selector: 'app-footer', // This is the tag you'll use in app.component.html
  standalone: true, // Assuming your project uses standalone components
  imports: [CommonModule], // Include CommonModule if you use things like ngIf/ngFor, though not strictly needed here
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    // You can fetch dynamic data or perform other initializations here
  }
}