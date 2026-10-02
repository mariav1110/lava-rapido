import { useContext, useState, type FormEvent } from 'react'
import { TicketContext } from '../../context/TicketContext'
import { formatarPreco, servicos } from '../../data/servicos'

const classeCampo =
  'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-sky-600 focus:ring-2 focus:ring-sky-200 focus:outline-hidden'

export default function FormularioAgendamento() {
  const { adicionarTicket } = useContext(TicketContext)
  const [nomeCliente, setNomeCliente] = useState('')
  const [modelo, setModelo] = useState('')
  const [placa, setPlaca] = useState('')
  const [tipoLavagem, setTipoLavagem] = useState('')

  function handleSubmit(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    adicionarTicket({
      nomeCliente: nomeCliente.trim(),
      modelo: modelo.trim(),
      placa: placa.trim().toUpperCase(),
      tipoLavagem,
    })
    // limpa o formulário
    setNomeCliente('')
    setModelo('')
    setPlaca('')
    setTipoLavagem('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
      <h2 className="text-xl font-extrabold text-slate-900">Novo tíquete de lavagem</h2>

      <div>
        <label htmlFor="nomeCliente" className="font-semibold">
          Nome do cliente
        </label>
        <input
          id="nomeCliente"
          type="text"
          required
          minLength={3}
          placeholder="Ex.: Maria Oliveira"
          value={nomeCliente}
          onChange={(e) => setNomeCliente(e.target.value)}
          className={classeCampo}
        />
      </div>

      <div>
        <label htmlFor="modelo" className="font-semibold">
          Modelo
        </label>
        <input
          id="modelo"
          type="text"
          required
          placeholder="Ex.: Honda Civic"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          className={classeCampo}
        />
      </div>

      <div>
        <label htmlFor="placa" className="font-semibold">
          Placa
        </label>
        <input
          id="placa"
          type="text"
          required
          maxLength={8}
          pattern="[A-Za-z]{3}-?[0-9][A-Za-z0-9][0-9]{2}"
          title="Use o formato ABC-1234 ou ABC1D23"
          placeholder="ABC1D23"
          value={placa}
          onChange={(e) => setPlaca(e.target.value.toUpperCase())}
          className={`${classeCampo} font-mono uppercase`}
        />
      </div>

      <div>
        <label htmlFor="tipoLavagem" className="font-semibold">
          Tipo de lavagem
        </label>
        <select
          id="tipoLavagem"
          required
          value={tipoLavagem}
          onChange={(e) => setTipoLavagem(e.target.value)}
          className={classeCampo}
        >
          <option value="" disabled>
            Selecione...
          </option>
          {servicos.map((servico) => (
            <option key={servico.id} value={servico.id}>
              {servico.nome} — {formatarPreco(servico.preco)}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-sky-700 px-6 py-3 font-bold text-white shadow-md transition hover:bg-sky-800"
      >
        Gerar tíquete
      </button>
    </form>
  )
}
