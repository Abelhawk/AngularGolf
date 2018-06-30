import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { PlayerService } from "../../player.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Array<Player>;

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(players => this.players = players)
  }

  addPlayer(name: string) {
    this.playerService.addPlayer(name);
  }

  deletePlayer(name: object) {
    this.playerService.deletePlayer(name);
  }

}
