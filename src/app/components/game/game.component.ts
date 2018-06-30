import { Component } from '@angular/core';
import { Observable } from "rxjs/index";
import { Player } from "../../player";
import { PlayerService } from "../players/player.service";
import { CourseService, HolesData } from "./course.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  holes: HolesData;
  players: Array<Player>;

  constructor(
    private playerService: PlayerService,
    private courseService: CourseService
  ) {
  }

  ngOnInit() {
    this.getPlayers();
    this.loadCourse();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }

  loadCourse() {
    this.courseService.getCourse().subscribe((holes) => holes);
  }

  hack(val) {
    return Array.from(val);
  }
}
