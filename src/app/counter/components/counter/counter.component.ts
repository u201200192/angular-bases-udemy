import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 10;

  incrementarPor(value:number): void{
    this.counter +=value;
  }

  reset(): void{
    this.counter = 10;
  }
}
