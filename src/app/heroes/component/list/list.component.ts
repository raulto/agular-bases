import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesList: string[] = ['Batman', 'Spiderman', 'SuperMan'];
  public deletedHeroe?: string;

  deleteHeroe(): void {
    this.deletedHeroe = this.heroesList.pop();
  }
}
