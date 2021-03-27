import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  showModal(): void{
    this.isVisible = true;
  }

  handleCancel(): void{
    this.isVisible = false;
  }

  handleOk(): void{
    this.isVisible = false;
  }
}
