import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = "Spiderman";
  public age:  number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getDescription(): string{
    return `${this.name} - ${this.age}` 
  }

  changeName():void{

    this.name = 'Batman';

  }

  changeAge():void{

    this.age = 10;

  }

  resetForm(): void{
    this.name = 'Spiderman';
    this.age = 45;
  }
}
