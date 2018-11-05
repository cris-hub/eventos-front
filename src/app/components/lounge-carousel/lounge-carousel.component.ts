import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { LoungeModel } from '../../model/lounge-model';
import { EventosService } from '../../services/eventos.service';
import { ImageModel } from '../../model/image-model';
import { LoungeImagesModel } from '../../model/lougen-images-model';

@Component({
  selector: 'app-lounge-carousel',
  templateUrl: './lounge-carousel.component.html',
  styleUrls: ['./lounge-carousel.component.css']
})
export class LoungeCarouselComponent implements OnInit {
  ngOnInit(): void {
    if (this.images) {
      // code...
      this.loungeImages = this.images.map(c => c.imagen)
    }
    if (this.lounge) {
      // code...
      if (this.lounge.images) {
        // code...
        this.loungeImages = this.lounge.images.map(c => c.imagen)
      }
    } else {
      this.loungeImages = this.eventosServie.reservation.lounge.images.map(c => c.imagen)
    }
  }
  @Input() public images: LoungeImagesModel[] = []
  @Input() public lounge: LoungeModel;
  public loungeImages: ImageModel[]
  constructor(
    private dialog: MatDialog,
    public eventosServie: EventosService
  ) {

  }


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