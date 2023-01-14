import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { type Municipality } from "@prisma/client";
import { api } from "../../utils/axios";
import { MunicipalityDTO } from "./municipality.dto";

@Injectable()
export class MunicipalityService {
	constructor(private prisma: PrismaService) {}

	async create(data: Municipality[]): Promise<{ count: number }> {
		return await this.prisma.municipality.createMany({ data: data });
	}

	async findAll(): Promise<Municipality[]> {
		const municipalities = await this.prisma.municipality.findMany();
		if (municipalities.length == 0) {
			// Rio de Janeiro code is 33
			await this.registerMunicipalities(33);
			return await this.prisma.municipality.findMany();
		}
		return municipalities;
	}

	async findOne(id: number): Promise<Municipality> {
		return await this.prisma.municipality.findUnique({
			where: {
				id
			}
		});
	}

	async registerMunicipalities(ufCode: number) {
		const response = await api.get<MunicipalityDTO[]>(`${ufCode}/municipios`).catch((error) => {
			throw new InternalServerErrorException("Houve um erro ao pegar dados da API do IBGE.", error);
		});

		const municipalities = response.data.map((municipality) => {
			return {
				name: municipality.nome,
				id: municipality.id
			};
		});

		const databaseQuery = await this.create(municipalities);
		if (databaseQuery.count != response.data.length) {
			throw new InternalServerErrorException("Houve um erro ao salvar os dados no banco de dados.");
		}
	}
}
