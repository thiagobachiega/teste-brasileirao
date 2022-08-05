export type Games = {
  campeonato: {
    campeonato_id: number
    nome: string
    slug: string
  }
  data_realizacao: string
  data_realizacao_iso: string
  estadio: {
    estadio_id: string
    nome_popular: string
  }
  hora_realizacao: string
  partida_id: number
  placar: string
  placar_mandante: number
  placar_visitante: number
  slug: string
  status: string
  time_mandante: {
    escudo: string
    nome_popular: string
    sigla: string
    time_id: number
  }
  time_visitante: {
    escudo: string
    nome_popular: string
    sigla: string
    time_id: number
  }
}
