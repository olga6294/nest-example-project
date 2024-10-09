import { Controller, Get, Param } from "@nestjs/common";
import { StarWarsService } from "./star-wars.service";

@Controller('star-wars')
export class StarWarsController {
  constructor(private readonly starWarsService: StarWarsService) {
  }

  @Get('people/:id')
  getPerson(@Param('id') id: number) {
    return this.starWarsService.getPerson(id);
  }
}
