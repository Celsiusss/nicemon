import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor (private alertCtrl: AlertController,
               private storage: Storage,
               private navCtrl: NavController) {}

  onSubmit(form) {
    if (!form.valid) {
      let alert = this.alertCtrl.create({
        title: 'Invalid Bitcoin Address',
        subTitle: 'The Bitcoin address you have provided is invalid or malfunctioned.',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    this.storage.set('address', form.value.address).then(() => {
      this.navCtrl.setRoot(TabsPage);
    });
    console.log(this.storage.get('address'));

  }

}
