import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { LoungeModel } from '../../model/lounge-model';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-lounge-carousel',
  templateUrl: './lounge-carousel.component.html',
  styleUrls: ['./lounge-carousel.component.css']
})
export class LoungeCarouselComponent {
  @Input() images: any;
  @Input() lounge: LoungeModel;
  constructor(
    private dialog: MatDialog,
    public eventosServie: EventosService
  ) { }


  /**
   * funcion para abrir las imagenes de las habitaciones
   * @param img (string) - URL de la imagen
   */
  openDialog(img: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.height = 'auto';
    dialogConfig.width = 'auto';
    dialogConfig.data = {
      img: img
    };
    this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}

/**
* clase pra pintar la imagen de la habitacion en el modal
*/
@Component({
  selector: 'dialog-content-example-dialog',
  template: '<img src="{{fullImage}}" alt="{{fullImage}}" style="height: 100%" />',
})
export class CourseDialogComponent {
  public fullImage: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.fullImage = data.img;
  }
}