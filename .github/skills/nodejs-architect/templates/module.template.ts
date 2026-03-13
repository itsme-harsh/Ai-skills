import { Module } from '@nestjs/common';
import { __ServiceName__Controller } from './__entity-name__.controller';
import { __ServiceName__Service } from './__entity-name__.service';
import { __EntityName__Repository } from './__entity-name__.repository';

@Module({
  imports: [
    // Import other domain modules or DatabaseModule here
  ],
  controllers: [__ServiceName__Controller],
  providers: [
    __ServiceName__Service,
    __EntityName__Repository,
  ],
  exports: [
    __ServiceName__Service, // Export if other domains need access to this service
  ],
})
export class __ServiceName__Module {}