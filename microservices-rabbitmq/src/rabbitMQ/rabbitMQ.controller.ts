import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class rabbitMQController {
  private readonly logger = new Logger(rabbitMQController.name);

  @MessagePattern('send_cats')
  async recivingCat(@Payload() data, @Ctx() context: RmqContext) {
    try {
      console.log('data: ', data);
      this.logger.log(`data: ${JSON.stringify(data)}`);

      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();

      channel.ack(originalMsg);
      return data;
    } catch (error) {
      this.logger.log(`Error > showCat error: ${error}`);
    }
  }
}
