import { Component, OnInit } from '@angular/core';
import { Character } from '../common/characters';
import { HpService } from '../service/hp.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Character[] = [];
  errorMessage: string;
  constructor(private hpservice: HpService) { }

  getAllItems() {
    this.hpservice.getCharacters().subscribe(
            data => this.items = data,
            error =>  this.errorMessage = <any>error);
 }

  ngOnInit() {
    this.getAllItems();
  }

  addItems(id:number) {
    this.hpservice.addCharacter(id);
  }
}
