import {Component} from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'jumbotran',
  templateUrl: 'jumbotran.component.html'
})

export class JumbotranComponent{
    private jbtHeading:String;
    private jbtText:String;
    private jbtBtnText:String;
    private jbtBtnUrl:String;

    constructor(){
        this.jbtHeading = "Helloworld";
        this.jbtText = " This is my first component";
        this.jbtBtnText = " Read more";
        this.jbtBtnUrl = "/about";
    }
}