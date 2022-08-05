export type Teams = {
  aproveitamento: number
  derrotas: number
  empates: number
  gols_contra: number
  gols_pro: number
  jogos: number
  pontos: number
  posicao: number
  saldo_gols: number
  time: {
    time_id: number
    nome_popular: string
    sigla: string
    escudo: string
  }
  ultimos_jogos: Array<string>
  variacao_posicao: number
  vitorias: number
  }
