import { useState, type ReactNode } from 'react'
import type { NovoTicket, TipoTicket } from '../types/tipoTicket'
import { TicketContext } from './TicketContext'

type TicketProviderProps = {
  children: ReactNode
}

export default function TicketProvider({ children }: TicketProviderProps) {
  const [tickets, setTickets] = useState<TipoTicket[]>([])
  const [proximoId, setProximoId] = useState(1)

  function adicionarTicket(dados: NovoTicket) {
    setTickets([...tickets, { ...dados, id: proximoId }])
    setProximoId(proximoId + 1)
  }

  function removerTicket(id: number) {
    setTickets(tickets.filter((ticket) => ticket.id !== id))
  }

  return (
    <TicketContext.Provider value={{ tickets, adicionarTicket, removerTicket }}>
      {children}
    </TicketContext.Provider>
  )
}
