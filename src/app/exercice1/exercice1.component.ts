import {Component, NgModule, OnInit} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})

export class Exercice1Component implements OnInit {
  public title = 'Exercice 1';
  public color = "black";
  constructor() {
  }

  public changeColor(color: string){
    this.color=color;
  }
  ngOnInit() {
  }

}

