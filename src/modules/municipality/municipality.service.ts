import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { type Municipality } from "@prisma/client";

@Injectable()
export class MunicipalityService {
	constructor(private prisma: PrismaService) {}

	async findAll(): Promise<Municipality[]> {
		return await this.prisma.municipality.findMany();
	}

	async findOne(id: number): Promise<Municipality> {
		return await this.prisma.municipality.findUnique({
			where: {
				id
			}
		});
	}
}
