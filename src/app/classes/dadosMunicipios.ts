export class DadosDoMunicipio {
  dados?: {
    nome: string;
    reg_inter: string;
    informacoes: Cinformacoes[];
  };
}

export class Cinformacoes {
  dia?: string;
  especificacao?: string;
  especificacao_cod?: number;
  area_de_interesse?: string;
  valor?: number;
  unidade?: string;
}
