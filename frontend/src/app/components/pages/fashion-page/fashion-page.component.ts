import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FashionService } from 'src/app/services/fashion.service';
import { Fashion } from 'src/app/shared/models/Fashion';

@Component({
  selector: 'app-fashion-page',
  templateUrl: './fashion-page.component.html',
  styleUrls: ['./fashion-page.component.css']
})
export class FashionPageComponent implements OnInit{
  fashion!:Fashion;
  constructor(activatedRoute:ActivatedRoute , fashionService:FashionService
    , private cartService:CartService, private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      fashionService.getFashionById(params.id).subscribe(serverFashion =>{
     this.fashion = serverFashion;
     });
    })

  }
  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.fashion);
    this.router.navigateByUrl('/cart-page');

  }

}
