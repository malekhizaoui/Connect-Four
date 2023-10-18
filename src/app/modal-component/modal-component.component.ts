import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent {
  @Input() result!: string;
  @Input() newGameFunction!: Function;

  constructor(public activeModal: NgbActiveModal) {}

  // Start a rematch by closing the current modal and starting a new game
  rematch() {
    this.closeModal();
    this.newGameFunction();
  }

  // Close the current modal
  closeModal() {
    this.activeModal.close();
  }
}
