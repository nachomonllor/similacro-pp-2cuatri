import { CineService } from './../cine.service';
import { Cine } from './../cine.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-cine-detalle',
  templateUrl: './cine-detalle.component.html',
  styleUrls: ['./cine-detalle.component.scss']
})
export class CineDetalleComponent  {

  @Input() cine: Cine;
  @Output() cineDeleted: EventEmitter<Cine> = new EventEmitter<Cine>();
  @Output() back: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public _cineService: CineService ) {}
  
    

  onDelete(cine) {
    this._cineService.deleteCine(cine.id);
    this.cineDeleted.emit(cine);
    this.onClose();
  }
  onClose() {
    this.back.emit();
  }

}
