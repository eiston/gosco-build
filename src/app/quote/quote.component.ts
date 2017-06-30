import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html'
})
export class QuoteComponent implements OnInit {
  uid: string;
  newtype: string;
  newcost: number;
  newmulti: number;
  onetime: boolean;
  items: FirebaseListObservable<any>;
  answerdata: FirebaseListObservable<any>;
  submitted: FirebaseObjectObservable<any>;
  dataSubmit = [];
  constructor( public authService: AuthService, db: AngularFireDatabase, private router: Router) {
    this.authService.user.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Not Logged in.');
          this.router.navigate(['signin']);
        } else {
          this.uid = auth.uid;
          console.log('logged in ', auth);
          console.log('/quote/answers/' + this.uid);
          this.submitted = db.object('/quote/answers/' + this.uid + '/submitted');
          this.answerdata = db.list('/quote/answers/' + this.uid + '/data');
          console.log('made');
          this.answerdata.remove();
          this.items = db.list('/quote/questions');
          console.log('wtf', this.items);
          console.log('data deleted');
          this.items.subscribe(items => {
            items.forEach(item => {
              console.log('Item:', item.text);
              this.answerdata.push({ qst: item.text, otc: item.otc, data: item.default, multiplier: item.multi });
            })
          });
        }
      }
    );
    this.onetime = true;
  }

  ngOnInit() {
  }
  submitAnswer(key: string, answer: number) {
    this.answerdata.update(key, { data: answer });
  }
  submitMultiplier(key: string, answer: number) {
    this.answerdata.update(key, { multiplier: answer });
  }
  addForm() {
    this.answerdata.push({qst: this.newtype, otc: this.onetime, data: this.newcost , multiplier: this.newmulti});
    this.newtype = '';
    this.newcost = null;
    this.newmulti = null;
    this.onetime = true;
  }
  deleteItem(key: string) {
    this.answerdata.remove(key);
  }
  submitForm() {
    this.answerdata.subscribe(items => {
      items.forEach(item => {
        this.dataSubmit.push({qst: item.qst, data: item.data, multi: item.multiplier, otc: item.otc});
      })
    })
    console.log(JSON.stringify(this.dataSubmit));
    this.submitted.set(this.dataSubmit);
  }
}
