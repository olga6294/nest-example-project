import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarWarsModule } from './star-wars/star-wars.module';
import { ConfigModule } from "@nestjs/config";
import { configuration } from "./configuration";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    StarWarsModule,
    ConfigModule.forRoot({load: [configuration]}),
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.POSTGRES_URL
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
