import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    
    public characters: Character[] = [{
        uid: uuid(),
        name:'Goku',
        power:10000
    },{
        uid:uuid(),
        name:'Vegeta', 
        power:9500
    },{
        uid: uuid(),
        name:"Pikolo",
        power:300
    }];

    addNewCharacter(emitCharacter: Character){
        
        const newCharacter : Character = {uid:uuid(),...emitCharacter};
        
        this.characters.push(newCharacter);
        console.log(emitCharacter);
        
    }

    deleteCharacterById(uid:string):void{

        this.characters = this.characters.filter(character => character.uid != uid);
        console.log(this.characters);

    }

    // deleteCharacter(i:number):void{
    //     console.log("Entra deleteCharacter");
    //     console.log(this.characters);

    //     this.characters.splice(i,1);
            
    // } 

    
    
    constructor() { }
    
}