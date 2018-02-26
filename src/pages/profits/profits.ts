import {Component, OnInit} from '@angular/core';
import * as HighStock from 'highcharts/highstock';
import {StatsService} from '../../services/stats';
import {HttpClient} from '@angular/common/http';
import {AlertController, NavController} from 'ionic-angular';
import {WelcomePage} from '../welcome/welcome';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-profits',
  templateUrl: 'profits.html'
})
export class ProfitsPage implements OnInit{

  profitability: number =  0;

  constructor (private stats: StatsService,
               private navCtrl: NavController,
               private alert: AlertController,
               private storage: Storage) {
  }

  ngOnInit() {
  }

  ionViewDidLoad() {

    this.storage.get('address').then(address => {

      this.stats.loadStats(address)
        .subscribe( (response: any) => {
          if (response.result.error) {
            this.storage.clear();
            this.navCtrl.setRoot(WelcomePage).then(() => {
              this.navCtrl.popToRoot();
              let alert = this.alert.create({
                title: 'Error',
                subTitle: response.result.error,
                buttons: ['OK']
              });
              alert.present();
            });
            return;
          }

          console.log(response.result);

          let profits: number = 0;
          for (let entry of response.result.current) {
            if (entry.data[0].a) {
              profits = profits + entry.profitability * entry.data[0].a;
            }
          }
          this.profitability = profits;


          let seriesData = [];

          for (let entry of this.stats.stats.past) {
            let newEntry = {name: this.stats.algos[entry.algo].name, data: processData(entry.data)};
            seriesData.push(newEntry);
          }

          function processData(data: Array<any>): Array<any> {
            let newData = [];
            for (let entry of data) {
              if (entry.length > 2) entry.splice(1, 1);
              entry[0] = entry[0] * 300000;
              if (typeof entry[1] != 'number') entry[1] = +entry[1];
              newData.push(entry);
            }
            return newData;
          }

          HighStock.stockChart('chart', {
            chart: {
              type: 'area'
            },
            title: {
              text: this.profitability.toFixed(8) + ' BTC / day'
            },
            yAxis: {
              title: {
                text: 'BTC'
              }
            },
            plotOptions: {
              area: {
                stacking: 'normal',
                gapSize: 1
              }
            },
            navigator: {
              enabled: false
            },
            tooltip: {
              followPointer: true,
              hideDelay: 0
            },
            rangeSelector: {
              verticalAlign: 'bottom',
              buttonTheme: {
                padding: 10,
                height: 30,
                width: 31
              },
              inputBoxStyle: {

              },
              buttons: [
                {
                  type: 'all',
                  text: '7D'
                },
                {
                  type: 'day',
                  count: 3,
                  text: '3D'
                },
                {
                  type: 'day',
                  count: 1,
                  text: '1D'
                },
                {
                  type: 'hour',
                  count: 12,
                  text: '12H'
                },
                {
                  type: 'minute',
                  count: 30,
                  text: '30M'
                }
              ]
            },
            series: seriesData
          });

        });

    });
  }


}
