import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponentDBZ {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks', power: 10
  }];

  @Output()
  //public onDeleteId: EventEmitter<number> = new EventEmitter();
  public onDeleteId = new EventEmitter<string>();

  onDeleteCharacterID(id?: string):void{
    //TODO: Emitir el ID del personaje
    //console.log({id})

    if (!id) return;

    this.onDeleteId.emit(id);
  }



}
