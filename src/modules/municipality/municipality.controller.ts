import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { MunicipalityService } from "./municipality.service";

@Controller("municipality")
export class MunicipalityController {
	constructor(private readonly municipalityService: MunicipalityService) {}

	@Get()
	async findAll() {
		return this.municipalityService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id", ParseIntPipe) id: number) {
		return this.municipalityService.findOne(id);
	}
}
