import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor() { }

  category: string []= ['Cloths','Spices','Handicraft','Upcomming Products']
  ngOnInit(): void {
  }

}
