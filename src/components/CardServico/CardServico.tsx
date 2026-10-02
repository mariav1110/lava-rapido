import { formatarPreco, type TipoServico } from '../../data/servicos'

type CardServicoProps = {
  servico: TipoServico
}

export default function CardServico({ servico }: CardServicoProps) {
  return (
    <article className="rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
      <p className="text-5xl" aria-hidden="true">
        {servico.icone}
      </p>
      <h3 className="mt-4 text-xl font-bold text-slate-900">{servico.nome}</h3>
      <p className="mt-2 text-slate-600">{servico.descricao}</p>
      <p className="mt-4 text-2xl font-extrabold text-sky-700">{formatarPreco(servico.preco)}</p>
    </article>
  )
}
