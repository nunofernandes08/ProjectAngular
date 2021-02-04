import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showMessage('Produto atualizado com sucesso!')
        this.router.navigate(['/product']);
    });
  }

  cancelProduct(): void {
    this.router.navigate(['/product'])
  }
}
