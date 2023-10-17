import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from '../app/game-board/game-board.component'; // Assurez-vous d'importer correctement le chemin de votre composant

const routes: Routes = [
  { path: 'game-board', component: GameBoardComponent },
  // Vous pouvez ajouter d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
