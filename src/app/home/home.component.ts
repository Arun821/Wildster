import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string;
  image:string;
  slide1 = [
    {image:'https://5.imimg.com/data5/RG/VZ/XA/SELLER-92256334/natural-raw-honey-500x500.png',
      title:'Honey'
    },
    {image:'https://www.healthshots.com/wp-content/uploads/2020/05/peppercorn.jpg', title:'Pepper'},
    {image:'https://www.thehealthsite.com/wp-content/uploads/2019/11/cardamom-.jpg', title:'Cardamom'},
    {image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/ginger-main-1515515765.jpg', title:'Ginger'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7O3WWfbPTHFpaY32kf0as7SorNUkDx4o8AA&usqp=CAU', title:'Tea Dust'},
    {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYdxFGP_No_mZCEfhlgg45-m36JEu3m1AyrQ&usqp=CAU', title:'Coffee Powder'},
    {image:'https://www.reachkerala.com/wp-content/uploads/kerala-info-410.jpg', title:'Handicraft 1'},
    {image:'https://kj1bcdn.b-cdn.net/media/24348/products.jpg', title:'Handicraft 2'},
    {image:'../../assets/wildster.jpg'}
  ];

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, autoplay:true, dots:true, arrows:false };
  // slickInit(e) {
  //   console.log('slick initialized');
  // }
  
  // breakpoint(e) {
  //   console.log('breakpoint');
  // }
  
  // afterChange(e) {
  //   console.log('afterChange');
  // }
  
  // beforeChange(e) {
  //   console.log('beforeChange');
  // }

  slidesConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    dots:true,
    responsive:[
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]

  };

  spiceSlidesConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    dots:false,
    arrows:false,
    responsive:[
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]

  };
  
  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  product(name){
    console.log(name);
  }

  handicraft(){
    this.router.navigate(['/handicraft']);
  }
  spices(){
    this.router.navigate(['/spices']);
  }
  cloth(){
    this.router.navigate(['/cloth']);
  }
}
