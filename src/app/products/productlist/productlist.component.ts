import { DataService } from '../../shared/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.sass']
})
export class ProductlistComponent implements OnInit {
  public products = []
  constructor(private dataServe: DataService) { }

  ngOnInit(): void {
    this.products = this.dataServe.getAllProducts();
  }

}