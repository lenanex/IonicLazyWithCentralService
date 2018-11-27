import { Component, OnInit } from '@angular/core';
import { MydataService } from '../mydata.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(public _myData : MydataService) { }

  ngOnInit() {
  }

}
