import {Component, Input, Inject} from '@angular/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from "@angular/material";

@Component({
    selector: 'carousel-gallery',
    templateUrl: './carousel-gallery.component.html',
    styleUrls: ['./carousel-gallery.component.css'],
})
export class CarouselGalleryComponent {
    @Input() images: any;
    constructor(private dialog: MatDialog) {}
    
    
    /**
     * funcion para abrir las imagenes de las habitaciones
     * @param img (string) - URL de la imagen
     */
    openDialog(img:string): void {
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
