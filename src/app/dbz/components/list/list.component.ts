import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

@Output()
  public deleteCharacters = new EventEmitter<string>();

@Input()
  public characterList:  Character[] = [{
    name: "Trunks",
    power: 10
  }]

  // onDeleteCharacter(i:number):void{
  //   console.log(i);
  // }

  // onDelete(uid:string):void{
  //   this.deleteCharacter.emit(uid);
  // }

  deleteCharacter(uid?:string ):void{
    if(!uid) return;
    this.deleteCharacters.emit(uid)
  };

}
