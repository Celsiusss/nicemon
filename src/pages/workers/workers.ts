import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {InfoPage} from './info/info';
import {StatsService} from '../../services/stats';

@Component({
  selector: 'page-workers',
  templateUrl: 'workers.html',
})
export class WorkersPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: HttpClient,
              private modalCtrl: ModalController,
              private stats: StatsService) {
  }

  workers: Array<any>;

  ionViewDidLoad() {

    this.stats.getWorkers()
      .subscribe(
        workers => this.workers = workers
      );
  }

  onOpenInfo(worker): void {
    let modal = this.modalCtrl.create(InfoPage, worker);
    modal.present();
  }

}
