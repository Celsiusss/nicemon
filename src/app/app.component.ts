import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {WelcomePage} from '../pages/welcome/welcome';
import {WelcomeService} from '../services/welcome';
import {Storage} from '@ionic/storage';
import {StatsService} from '../services/stats';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  loggedIn = false;

  constructor (platform: Platform,
               statusBar: StatusBar,
               splashScreen: SplashScreen,
               private welcomeService: WelcomeService,
               private stats: StatsService,
               private storage: Storage) {

    // this.stats.loadStats();

    this.welcomeService.isSignedIn().then(address => {
      storage.get('address').then(address => {
        this.stats.address = address;

        if (address) {
          this.loggedIn = true;
        }

        this.rootPage = this.loggedIn ? TabsPage : WelcomePage;

        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
          statusBar.styleDefault();
          splashScreen.hide();
        });
      });


    });


  }
}
