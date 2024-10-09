import { Module } from '@nestjs/common';
import { StarWarsController } from './star-wars.controller';
import { StarWarsService } from './star-wars.service';
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [StarWarsController],
  providers: [StarWarsService]
})
export class StarWarsModule {}
