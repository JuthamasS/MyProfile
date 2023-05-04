import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  productPicture : any = [];
  product : any = [];

  constructor(private appService:AppService, private route:ActivatedRoute){
    try{
      console.log('product-list.component.constructor');
      console.log(this.appService.hostName);
    }catch(ex){

    }
  }

  ngOnInit(): void{
    this.route.queryParams
      .subscribe((params:any) => {
        console.log(params);
      params.id;
    });
    this.getImagesList();
    this.getProductList();
  }
  
  getImagesList(): any{
    var paramId = 0;
    this.route.queryParams
      .subscribe((params:any) => {
        console.log(params);
        paramId = params.id;
    });
    return this.appService.getProductsById(paramId).subscribe(response => this.productPicture = response.images);
  }

  getProductList(): any{
    var paramId = 0;
    this.route.queryParams
      .subscribe((params:any) => {
        console.log(params);
        paramId = params.id;
    });
    return this.appService.getProductsById(paramId).subscribe(response => this.product = response);
  }
}
