import { Component } from '@angular/core';
import { Observable } from "rxjs/index";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  public holes: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.holes = db.collection('/holes').valueChanges();
  }

  ngOnInit() {
  }

}
