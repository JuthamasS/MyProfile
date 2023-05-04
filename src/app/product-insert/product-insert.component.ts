import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.scss']
})
export class ProductInsertComponent {


  constructor(){
    try{
      console.log('product-insert.component.constructor');
    }catch(ex){

    }
  }

  ngOnInit(): void{
    console.log("OnInit");
  }
}
