import { NgModule } from "@angular/core";
import { ListComponent } from "./component/list/list.component";
import { HeroComponent } from "./component/hero/hero.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        HeroComponent,
        ListComponent
    ],
    exports:[
        HeroComponent,
        ListComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule{

}