import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-form-character',
  templateUrl: './form-character.component.html',
  styleUrl: './form-character.component.css'
})
export class FormCharacterComponent {


@Output("test") 
public propCharacter :  EventEmitter<Character> = new EventEmitter();

  public characterForm : Character={
      name: '',
      power: 0
    };

    addCharacter(): void{
      console.log("form");
      console.log(this.characterForm);

      this.propCharacter.emit(this.characterForm);
    }
}
