import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  worker: any;

  constructor (private viewCtrl: ViewController,
               private params: NavParams) {
    this.worker = params;
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }



}
