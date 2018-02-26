import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PaymentsPage } from '../pages/payments/payments';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {WelcomePage} from '../pages/welcome/welcome';
import {IonicStorageModule} from '@ionic/storage';
import {WelcomeService} from '../services/welcome';
import {WorkersPage} from '../pages/workers/workers';
import {HttpClientModule} from '@angular/common/http';
import {InfoPage} from '../pages/workers/info/info';
import {StatsService} from '../services/stats';
import {ProfitsPage} from '../pages/profits/profits';
import {SettingsPage} from '../pages/settings/settings';
import {AdMobPro} from '@ionic-native/admob-pro';

@NgModule({
  declarations: [
    MyApp,
    PaymentsPage,
    WorkersPage,
    HomePage,
    TabsPage,
    WelcomePage,
    InfoPage,
    ProfitsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PaymentsPage,
    WorkersPage,
    HomePage,
    TabsPage,
    WelcomePage,
    InfoPage,
    ProfitsPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WelcomeService,
    StatsService,
    AdMobPro
  ]
})
export class AppModule {}
