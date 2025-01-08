import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroeNames: string[] = ['Spiderman','Ironman','Hulk', 'Flash','HeBan']
  public deletedHero?: string;

  removeLastHeroe():void{
    this.deletedHero = this.heroeNames.pop();

  }

}
