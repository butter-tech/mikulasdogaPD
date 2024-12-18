import { Module } from '@nestjs/common';
import { ChildrenModule } from './children/children.module';
import { ToysModule } from './toys/toys.module';

@Module({
  imports: [ChildrenModule, ToysModule],
})
export class AppModule {}
