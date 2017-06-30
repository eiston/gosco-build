import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
@Component({
  selector: 'app-ownership-cost',
  templateUrl: './ownership-cost.component.html',
})
export class OwnershipCostComponent implements OnInit {
  items: FirebaseListObservable<any>;
  newName: string;
  defaultdata: number;
  multiplier: number;
  onetime: boolean;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/quote/questions');
    this.onetime = true;
  }

  ngOnInit() {
  }
  addItem() {
    this.items.push({ text: this.newName , default: this.defaultdata, multi: this.multiplier, otc: this.onetime});
    this.newName = '';
    this.defaultdata = null;
    this.multiplier = null;
    this.onetime = true;
  }
  updateItem(key: string, newText: string, newDefault: number, newmulti: number, newchek: boolean) {
    this.items.update(key, { text: newText , default: newDefault, multi: newmulti, otc: newchek});
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }
}
