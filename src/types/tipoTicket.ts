export type TipoTicket = {
  id: number
  nomeCliente: string
  modelo: string
  placa: string
  tipoLavagem: string
}

// Dados que vêm do formulário (o id é gerado pelo contexto)
export type NovoTicket = Omit<TipoTicket, 'id'>
