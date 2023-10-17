import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent {
  @Input() result!: string; // Use '!' to indicate it will be initialized at runtime
  @Input() newGameFunction!: Function;

  constructor(public activeModal: NgbActiveModal) {}

  rematch(){
    this.closeModal();
    this.newGameFunction()
  }
  closeModal() {
    this.activeModal.close();
  }
}
