import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-email-sender',
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.scss'],
})
export class EmailSenderComponent implements OnInit {
  constructor() {}

  to_name: string = 'john-doe@mail.com';
  subject: string = 'Testeando';
  message: string = 'Este en un mensaje de prueba';
  serviceId: string = 'service_udp0c78';
  emailTemplateId = 'template_djukjaw';

  ngOnInit(): void {
    this.initEmailJS();
  }

  private initEmailJS(): void {
    const publicKey = 'nm2IN8v2t5n4COVKQ';

    emailjs.init(publicKey);
  }

  sendEmail() {
    const templateParams = {
      to_name: this.to_name,
      subject: this.subject,
      message: this.message,
    };

    emailjs.send(this.serviceId, this.emailTemplateId, templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  }
}