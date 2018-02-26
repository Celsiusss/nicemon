import {Storage} from '@ionic/storage';
import {Injectable} from '@angular/core';

@Injectable()
export class WelcomeService {
  signedIn: boolean = false;

  constructor (private storage: Storage) {

  }

  isSignedIn(): Promise<any> {
    return this.storage.get('address').then(address => {

      return Promise.resolve(address);
    });

  };

}
