import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Storage} from '@ionic/storage';
import {NavController} from 'ionic-angular';
import {WelcomePage} from '../pages/welcome/welcome';

@Injectable()
export class StatsService {

  stats: any;
  address: string = '';
  loaded: boolean = false;

  constructor (private http: HttpClient,
               private storage: Storage) {
    storage.get('address').then(address => {
      this.address = address;

    });
  }

  getWorkers(address?: string): Observable<any> {
    return this.http.get('https://api.nicehash.com/api?method=stats.provider.workers&addr=' + (address ? address : this.address))
      .map((response: any) => response.result.workers)
  }

  loadStats(address?: string): Observable<any> {
    return this.http.get('https://api.nicehash.com/api?method=stats.provider.ex&addr=' + (address ? address : this.address) )
      .do(
        (response: any) => {
          if (response.result.error) {
            // return setTimeout(() => {
            //   this.loadStats();
            // }, 5000);
          }
          this.stats = response.result;
          this.loaded = true;

        }
      );


  }

  getPayments(address?: string): Observable<any> {
    return this.http.get('https://api.nicehash.com/api?method=stats.provider.payments&addr=' + (address ? address : this.address))
      .map((response: any) => response.result.payments)
  }

  algos = [
    {name: 'Scrypt', suffix: 'MH'},
    {name: 'SHA256', suffix: 'MH'},
    {name: 'ScryptNf', suffix: 'MH'},
    {name: 'X11', suffix: 'MH'},
    {name: 'X13', suffix: 'MH'},
    {name: 'Keccak', suffix: 'MH'},
    {name: 'X15', suffix: 'MH'},
    {name: 'Nist5', suffix: 'MH'},
    {name: 'NeoScrypt', suffix: 'MH'},
    {name: 'Lyra2RE', suffix: 'MH'},
    {name: 'WhirlPoolX', suffix: 'MH'},
    {name: 'Qubit', suffix: 'MH'},
    {name: 'Quark', suffix: 'MH'},
    {name: 'Axiom', suffix: 'MH'},
    {name: 'Lyra2REv2', suffix: 'MH'},
    {name: 'ScryptJaneNf16', suffix: 'MH'},
    {name: 'Blake256r8', suffix: 'MH'},
    {name: 'Blake256r14', suffix: 'MH'},
    {name: 'Blake256r8vnl', suffix: 'MH'},
    {name: 'Hodl', suffix: 'MH'},
    {name: 'DaggerHashimoto', suffix: 'MH'},
    {name: 'Decred', suffix: 'GH'},
    {name: 'Cryptonight', suffix: 'MH'},
    {name: 'Lbry', suffix: 'GH'},
    {name: 'Equihash', suffix: 'Sol'},
    {name: 'Pascal', suffix: 'GH'},
    {name: 'X11Ghost', suffix: 'MH'},
    {name: 'Sia', suffix: 'GH'},
    {name: 'Blake2s', suffix: 'GH'},
    {name: 'Skunk', suffix: 'MH'}
  ]

}
