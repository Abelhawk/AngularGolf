import { Injectable } from '@angular/core';
import { Observable } from "rxjs/index";
import { Player } from "../../player";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // private db: AngularFirestore;
  private players: AngularFirestoreCollection<Player>;


  constructor(db: AngularFirestore) {
    this.players = db.collection<Player>('/players');
  }

  getPlayers(): Observable<Player[]> {
    return this.players.valueChanges();
      }

    addPlayer(name: string){
      let player = {
        name: name,
        scores: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      };
      this.players.doc(player.name).set(player).then(function (){console.log('player added!')} );
    }

    deletePlayer(name: object){
    let player = {
      name: name,
    };
      this.players.doc(player.name).delete(player).then(function (){console.log('player deleted!')} );

    }

    updatePlayer(player){
      this.players.doc(player.name).set(player);
    }
}
