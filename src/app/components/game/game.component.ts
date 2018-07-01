import { Component } from '@angular/core';
import { Player } from "../../player";
import { PlayerService } from "../players/player.service";
import { CourseService } from "./course.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

// import SelectTeeComponent {
//
// }

export class GameComponent {
  private course;
  players: Array<Player>;
  private tee;

  constructor(
    private playerService: PlayerService,
    private courseService: CourseService
  ) {
  }

  ngOnInit() {
    this.getPlayers();
    this.loadCourse();
  }

  changeTee(chosenTee){
    this.tee = chosenTee;
    console.log("Changed to tee #" + chosenTee);
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }

  loadCourse() {
    this.courseService.getCourse().subscribe(data => {
      console.log(data);
      this.course = data.data;
      this.tee = 0;
    });
  }

  saveScores(player){
    this.playerService.updatePlayer(player);
  }

  totalScore(){

  }
}
