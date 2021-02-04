import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor( 
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });
  }

  deleteProduct(): void{
    this.productService.delete(`${this.product.id}`).subscribe(() =>{
      this.productService.showMessage('Produto excluido com sucesso!')
        this.router.navigate(['/product']);
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/product'])
  }

}
