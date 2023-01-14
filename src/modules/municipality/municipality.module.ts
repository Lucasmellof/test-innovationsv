import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MunicipalityController } from "./municipality.controller";
import { MunicipalityService } from "./municipality.service";

@Module({
	imports: [],
	controllers: [MunicipalityController],
	providers: [MunicipalityService, PrismaService]
})
export class MunicipalityModule {}
