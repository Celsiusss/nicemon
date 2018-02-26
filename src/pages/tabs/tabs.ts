import {Component, ViewChild} from '@angular/core';

import { PaymentsPage } from '../payments/payments';
import { HomePage } from '../home/home';
import {WorkersPage} from '../workers/workers';
import {ProfitsPage} from '../profits/profits';
import {SettingsPage} from '../settings/settings';
import {Tabs} from 'ionic-angular';
import {AdMobPro} from '@ionic-native/admob-pro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('tabs') tabRef: Tabs;

  tab1Root = HomePage;
  tab2Root = PaymentsPage;
  tab3Root = WorkersPage;
  tab4Root = ProfitsPage;
  tab5Root = SettingsPage;

  constructor (private adMob: AdMobPro) {

  }

  ionViewDidLoad() {

    let adMobId = {banner: 'ca-app-pub-5888168889419917/6710439667'};

    if(this.adMob) this.adMob.createBanner({
      adId: adMobId.banner,
      position: this.adMob.AD_POSITION.BOTTOM_CENTER,
      autoShow: true
    });


  }

}
