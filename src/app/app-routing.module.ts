import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PlayersComponent } from "./components/players/players.component";
import { GameComponent } from "./components/game/game.component";

const routes: Routes = [
  {path: 'game', component: GameComponent},
  {path: 'players', component: PlayersComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
