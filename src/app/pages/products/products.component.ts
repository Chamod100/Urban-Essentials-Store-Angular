import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardComponent } from '../../components/card/card.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: any[] = [];

  private http = inject(HttpClient);

  ngOnInit(): void {
    console.log("Products page Load !!");

    this.http.get("https://dummyjson.com/products").subscribe((data: any) => {
      console.log(data.products);
      
      this.productList = data.products; 
    });
  }
}