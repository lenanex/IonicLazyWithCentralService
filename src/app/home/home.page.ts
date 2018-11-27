import { MydataService } from './../mydata.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public _myData : MydataService
  ){
    this._myData.exVariable = 'Bonjour from home';
  }
}
