import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponentComponent } from './modal-component/modal-component.component'; // Import NgbModule
    
@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
