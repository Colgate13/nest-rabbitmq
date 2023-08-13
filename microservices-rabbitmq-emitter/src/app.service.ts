import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('CATS_SERVICE') private client: ClientProxy) {}

  sendCats() {
    try {
      this.client.emit('send_cats', {
        id: `Miau-${Math.random() * 100}}`,
        data: {
          catName: `Miau-${Math.random() * 100}`,
        },
      });

      return {
        message: 'Cat sent',
      };
    } catch (error) {
      console.log(error);
    }
  }
}
