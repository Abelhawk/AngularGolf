import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-tee',
  templateUrl: './select-tee.component.html',
  styleUrls: ['./select-tee.component.css']
})
export class SelectTeeComponent implements OnInit {
  tee: number;

  constructor() { }

  ngOnInit() {
  }

  changeTee(chosenTee){
    this.tee = chosenTee;
    console.log("Changed to tee #" + chosenTee);
  }
}
