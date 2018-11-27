import { MydataService } from './../mydata.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   constructor(
    public _myData : MydataService,
    public navCtrl : NavController
  ){
    this._myData.exVariable = 'Bonjour from home';
  }

  goToFirst(){
    this.navCtrl.navigateForward('/first')
  }
}
