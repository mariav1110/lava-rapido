import { useContext } from 'react'
import { TicketContext } from '../../context/TicketContext'
import { buscarServico, formatarPreco } from '../../data/servicos'
import type { TipoTicket } from '../../types/tipoTicket'

type CardTicketProps = {
  ticket: TipoTicket
}

export default function CardTicket({ ticket }: CardTicketProps) {
  const { removerTicket } = useContext(TicketContext)
  const servico = buscarServico(ticket.tipoLavagem)
  const numero = String(ticket.id).padStart(3, '0')

  return (
    <article className="rounded-2xl border-l-8 border-amber-400 bg-white p-5 shadow-md ring-1 ring-slate-200">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold tracking-widest text-sky-700 uppercase">Tíquete nº {numero}</p>
          <h3 className="mt-1 text-lg font-extrabold text-slate-900">{ticket.nomeCliente}</h3>
        </div>
        <span className="rounded-lg border-2 border-slate-800 bg-slate-100 px-3 py-1 font-mono font-bold tracking-widest">
          {ticket.placa}
        </span>
      </div>

      <p className="mt-2 text-slate-600">🚗 {ticket.modelo}</p>
      <p className="text-slate-600">
        🧽 {servico?.nome} {servico && `· ${formatarPreco(servico.preco)}`}
      </p>

      <button
        type="button"
        onClick={() => removerTicket(ticket.id)}
        aria-label={`Excluir tíquete ${numero}`}
        className="mt-4 rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-red-700"
      >
        Excluir
      </button>
    </article>
  )
}
