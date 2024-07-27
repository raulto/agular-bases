import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    
    <p>{{counter}}</p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>

    `
})

export class AppCounter  {
 
    public counter:number = 10;
    
    increaseBy(value:number):void{
        this.counter += value;
    }

    reset(){
        this.counter = 10;
    }
    
}