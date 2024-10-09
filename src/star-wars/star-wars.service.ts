import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { mapToPersonResponse } from "./star-wars.mapper";

@Injectable()
export class StarWarsService {
  constructor(private readonly httpService: HttpService, private readonly configService: ConfigService) {
  }

  getPerson(id: number) {
    return this.httpService.axiosRef.get(`${this.configService.get('STAR_WARS_API')}/people/${id}`)
      .then(response => response.data)
      .then(person => mapToPersonResponse(person))
      .catch(response => this.handleError(response?.status));
  }

  private handleError(status) {
    switch (status) {
      case 404:
        throw new HttpException({error: "Resource for given id not found"}, HttpStatus.NOT_FOUND);
      default:
        throw new HttpException({error: "Something went wrong"}, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
