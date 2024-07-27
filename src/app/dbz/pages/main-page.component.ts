import { Character } from './../interfaces/character.interface';
import { DbzService } from './../services/dbz.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(private dbzService: DbzService){}

    get characters() : Character[]{
        return [...this.dbzService.characters];
    } 

    onDeleteCharacter(uid:string):void{
        this.dbzService.deleteCharacterById(uid);
    }

    onAddCharacter(character:Character){
        this.dbzService.addNewCharacter(character);
    }

}