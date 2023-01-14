import axios from "axios";
import { Agent } from "https";
import { constants } from "crypto";
import { MunicipalityDTO } from "../modules/municipality/municipality.dto";
import { InternalServerErrorException } from "@nestjs/common";
import { Municipality } from "@prisma/client";

const IBGE_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

const axiosAPI = axios.create({
	// Necessário para consumir a api do IBGE
	httpsAgent: new Agent({
		secureOptions: constants.SSL_OP_LEGACY_SERVER_CONNECT
	})
});

export async function registerMunicipalities(ufCode: number): Promise<Municipality[]> {
	const response = await axiosAPI
		.get<MunicipalityDTO[]>(`${IBGE_URL}/${ufCode}/municipios`)
		.catch((error) => {
			throw new InternalServerErrorException("Houve um erro ao pegar dados da API do IBGE.", error);
		});

	return response.data.map((municipality) => {
		return {
			name: municipality.nome,
			id: municipality.id
		};
	});
}
