import { Injectable } from '@angular/core'
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({  providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7501
  }];

    addCharacter(character: Character): void {
      // console.log('MainPage');
      // console.log(character);

      const newCharacter: Character = { id: uuid(), ...character  };

      //character.id = uuid();

      this.characters.push(newCharacter);
    }

  /*onDeleteCharacterId(index : number){
    this.characters.splice(index, 1);
*/
    onDeleteCharacterId(id: string){
      this.characters = this.characters.filter( x=> x.id != id );
    }



  constructor(){}

}
