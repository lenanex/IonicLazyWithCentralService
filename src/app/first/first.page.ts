import { MydataService } from './../mydata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(public _myData : MydataService) { }

  ngOnInit() {
    this._myData.exVariable = 'Bonjour from First';
  }

}
