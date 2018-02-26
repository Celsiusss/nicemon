import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StatsService} from '../../services/stats';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-about',
  templateUrl: 'payments.html'
})
export class PaymentsPage {

  payments: Observable<any>;

  constructor(public navCtrl: NavController,
              private stats: StatsService,
              private storage: Storage) {

    this.storage.get('address').then(address => {
      this.payments = this.stats.getPayments(address);
    });

  }



}
