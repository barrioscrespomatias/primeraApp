import { Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {

  @Input() position: any;
  @Input() buttonMessage: any;
  @Input() message: any;

  constructor(private toastController: ToastController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom', message: "Hello world") {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
