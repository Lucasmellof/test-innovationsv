import axios from "axios";
import { Agent } from "https";
import { constants } from "crypto";

export const api = axios.create({
	// Necessario para consumir a api do IBGE
	httpsAgent: new Agent({
		secureOptions: constants.SSL_OP_LEGACY_SERVER_CONNECT
	}),
	baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
});
