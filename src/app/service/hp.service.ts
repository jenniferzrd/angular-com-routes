import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Character } from '../common/characters';


@Injectable()
export class HpService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/users';
  characters: Character[];
  observableItems: Observable<Character[]>
  allCharacters: Character[] = [];
  selectedCharacter: Character[] = [];

  constructor(private http: HttpClient) {

    this.observableItems = this.http.get<Character[]>(this.baseUrl);
    this.observableItems.subscribe(
      data => this.allCharacters = data
    );

  }

  getCharacters(): Observable<Character[]> {
    return this.observableItems;
  }

  addCharacter(id:number) {
    let character = this.allCharacters.find(ob => ob.id === id);
    if (this.selectedCharacter.indexOf(character) < 0) {
      this.selectedCharacter.push(character);
    }
  }

  getSelectedCharacter(): Character[] {
    return this.selectedCharacter;
  }

}
