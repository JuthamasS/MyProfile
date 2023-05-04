import { Component,OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  product : any = [];
  //router: any;

  constructor(private appService: AppService, private router: Router){
    try{
      console.log('product-list.component.constructor');
      console.log(this.appService.hostName);
    }catch(ex){

    }
  }

  ngOnInit(): void{
    console.log("OnInit");

    //this.product = this.getProductList();
    this.getProductList();
  }

  getProductList(): any{
    // return this.appService.getProducts().subscribe(response => response.products);
    return this.appService.getProducts().subscribe(response => this.product = response.products);
  }

  getProductsDetail(id: number) {
    console.log('view detail',id);
    this.router.navigate([`/product-detail2`],{queryParams:{id:id}});
    
  }


  //  async getProductList2(); void{
  //   await this.appService.getProducts().subscribe(heroes => this.getProductList = heroes.products);
  //  }
}
