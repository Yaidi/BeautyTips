import { DataService } from '../../shared/data.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.sass']
})
export class DetailsProductComponent implements OnInit {
 public product: any = {}; 

  constructor(
    private route:ActivatedRoute, 
    private dataServe: DataService,
    private location: Location
    ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
   [this.product] = this.dataServe.getProductById(productId);
    console.log(productId, 'soy el product id')
  }

  onGoBack(): void {
    this.location.back();
  }
}
