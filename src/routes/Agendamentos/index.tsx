import { useContext } from 'react'
import CardTicket from '../../components/CardTicket/CardTicket'
import FormularioAgendamento from '../../components/FormularioAgendamento/FormularioAgendamento'
import { TicketContext } from '../../context/TicketContext'

export default function Agendamentos() {
  const { tickets } = useContext(TicketContext)

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">Agendamentos</h1>
      <p className="mt-2 text-slate-600">
        Preencha o formulário para gerar o tíquete de lavagem. Para tirar um carro da fila, é só excluir o tíquete.
      </p>

      <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
        <FormularioAgendamento />

        <section aria-labelledby="titulo-fila">
          <h2 id="titulo-fila" className="text-xl font-extrabold text-slate-900">
            Fila de lavagem ({tickets.length})
          </h2>
          {tickets.length === 0 ? (
            <p className="mt-4 rounded-2xl border-2 border-dashed border-slate-300 p-8 text-center text-slate-500">
              Nenhum carro na fila ainda. Gere o primeiro tíquete! 🚗
            </p>
          ) : (
            <ul className="mt-4 space-y-4">
              {tickets.map((ticket) => (
                <li key={ticket.id}>
                  <CardTicket ticket={ticket} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}
