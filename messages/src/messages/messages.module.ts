import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from 'src/messages.service';
import { MessagesRepository } from 'src/messages.respository';
@Module({
  controllers: [MessagesController],
  providers:[MessagesService,MessagesRepository]
})
export class MessagesModule {}
