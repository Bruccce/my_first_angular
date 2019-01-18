import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goNewsContent() {
    this.router.navigate(['/newscontent', '1234']);
  }

  goNews() {
    const queryParams: NavigationExtras = {
      queryParams: {'aid': 123}
    };

    this.router.navigate(['/news', ], queryParams);
  }

}
