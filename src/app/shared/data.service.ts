import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {id: 1, name: 'egg', category:'Food', description: 'Lorem Ipsum', price: 1},
    {id: 2, name: 'Coca Cola', category:'Drink', description: 'Lorem Ipsum', price: 3},
    {id: 3, name: 'Chokies', category:'Food', description: 'Lorem cokies', price: 1},
  ]

  getAllProducts(){
    return this.products;
  }

  getProductById(id){
    return this.products.filter((product) => product.id == id);
  }
}
