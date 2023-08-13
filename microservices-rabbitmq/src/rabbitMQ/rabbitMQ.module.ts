import { Global, Module } from '@nestjs/common';
import { rabbitMQController } from './rabbitMQ.controller';

@Global()
@Module({
  controllers: [rabbitMQController],
})
export class RabbitMQModule {}
