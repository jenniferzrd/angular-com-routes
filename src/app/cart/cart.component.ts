import { Component, OnInit } from '@angular/core';
import { HpService } from '../service/hp.service';
import { Character } from '../common/characters';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartCharacter: Character[] = [];

  constructor(private hpService: HpService) { }

  getItemsForCart() {
    this.cartCharacter = this.hpService.getSelectedCharacter();
  }

  ngOnInit() {
    this.getItemsForCart();
  }

}
