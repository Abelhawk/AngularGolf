import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';
import { PlayerService } from "./player.service";
import { CourseService } from "../game/course.service";
import { HolesData } from "../../holes";
import { Observable } from "rxjs/index";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Array<Player>;

  constructor(
    private playerService: PlayerService,
    private courseService: CourseService
    ) {
  }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(players => this.players = players)
  }

  addPlayer(name: string) {
    let isDuplicate: boolean;
    if (isDuplicate){
      this.playerService.addPlayer(name + '1');
    }else{
      this.playerService.addPlayer(name);
    }


  }

  deletePlayer(name: object) {
    this.playerService.deletePlayer(name);
  }

  // getHoles(){
  //   this.courseService.getCourse()
  //     .subscribe(data: Tee) => this.tee = {...data});
  // }


}
