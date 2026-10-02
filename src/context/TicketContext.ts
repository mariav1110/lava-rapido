import { createContext } from 'react'
import type { NovoTicket, TipoTicket } from '../types/tipoTicket'

export type TicketContextType = {
  tickets: TipoTicket[]
  adicionarTicket: (dados: NovoTicket) => void
  removerTicket: (id: number) => void
}

export const TicketContext = createContext<TicketContextType>({
  tickets: [],
  adicionarTicket: () => {},
  removerTicket: () => {},
})
