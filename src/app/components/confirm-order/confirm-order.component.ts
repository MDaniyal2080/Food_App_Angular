import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-confirm-order',
  standalone: true,
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css',
  imports: [NavbarComponent, CommonModule, FooterComponent]
})
export class ConfirmOrderComponent implements OnInit {
  loader = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }
}
