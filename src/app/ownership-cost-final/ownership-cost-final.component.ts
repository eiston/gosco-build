import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ownership-cost-final',
  templateUrl: './ownership-cost-final.component.html',
  styleUrls: ['./ownership-cost-final.component.scss']
})
export class OwnershipCostFinalComponent implements OnInit {
  uid: string;
  captital: number;
  Valves = 74;
  Actuators = 52;
  RepairKits = 9;
  MTBF = 28;
  total_static: number;
  total_yearly: number;
  submitted: FirebaseListObservable<any>;
  constructor( public authService: AuthService, db: AngularFireDatabase, private router: Router) {
    this.captital = 0;
    this.total_static = 0;
    this.total_yearly = 0;
    this.authService.user.subscribe(
      (auth) => {
        if (auth === null) {
          console.log('Not Logged in.');
          this.router.navigate(['signin']);
        } else {
          this.uid = auth.uid;
          console.log('logged in ', auth);
          console.log('/quote/answers/' + this.uid);
          this.submitted = db.list('/quote/answers/' + this.uid + '/submitted');
          this.getinfo();
        }
      }
    );
  }
  ngOnInit() {
  }
  getinfo() {
    this.submitted.subscribe(items => {
      items.forEach(item => {
        if (item.otc) {
          this.total_static += (item.data * item.multi);
        } else {
          this.total_yearly += (item.data * item.multi);
        }
        switch (item.qst) {
          case 'Cost of New Valve': {
            this.captital += (item.data * this.Valves);
            console.log('Cost of New Valve');
            break;
          }
          case 'Cost of New Actuator': {
            this.captital += (item.data * this.Actuators);
            console.log('Cost of New Actuator');
            break;
          }
          case 'Cost of Spare Repair Kit': {
            this.captital += (item.data * this.RepairKits);
            console.log('Cost of Spare Repair Kit');
            break;
          }
        }
      })
    });
    console.log(this.total_static);
  }
  TotalCostofOwnership(Year: number) {
    return this.total_static + ( this.total_yearly * Year * 12 ) / this.MTBF;
  }
  MonthlyCostofOwnership(Year: number) {
    return this.TotalCostofOwnership(Year) / (Year * 12);
  }
  MonthlyCostPerPosition (Year: number, postions: number) {
    return this.MonthlyCostofOwnership(Year) / postions;
  }
}
