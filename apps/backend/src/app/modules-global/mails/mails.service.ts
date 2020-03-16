import * as sgMail from '@sendgrid/mail';
import { MailData } from '@sendgrid/helpers/classes/mail';
import { Injectable } from '@nestjs/common';

import { EnvService } from '../env/env.service';

@Injectable()
export class MailsService {
  // TODO: create production version
  private baseUrlDev = 'http://localhost:4200';
  private apiKey = this.envService.get<string>('SENDGRID_API_KEY');

  constructor(private envService: EnvService) {}

  private setApiKey() {
    sgMail.setApiKey(this.apiKey);
  }

  private sendEmail(msg: MailData) {
    if (!this.envService.isTest()) {
      // tslint:disable no-console
      sgMail.send(msg).catch(err => console.log(err));
    }
  }

  public sendAccountConfirmationEmail(email: string, userName: string, token: string): void {
    this.setApiKey();

    const msg = {
      to: email,
      from: 'family-dashboard@support.com',
      subject: 'Family Dashboard - account confirmation',
      html: `
        <h3>Hello ${userName}</h3>
        <p>
          Please confirm your account by visiting
          <a href='${this.baseUrlDev}/confirm-account?token=${token}' target="_blank">
            this page
          </a>
        </p>
      `,
    };

    this.sendEmail(msg);
  }
}
