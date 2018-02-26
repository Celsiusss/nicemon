import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {WelcomePage} from '../welcome/welcome';
import {WelcomeService} from '../../services/welcome';
import {SplashScreen} from '@ionic-native/splash-screen';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor (public navCtrl: NavController,
               public navParams: NavParams,
               private storage: Storage,
               private splashScreen: SplashScreen) {}

  ionViewDidLoad() {

  }

  onLogOut(): void {
    this.storage.clear().then(() => {
      this.splashScreen.show();
      window.location.reload();
    });
  }

}
