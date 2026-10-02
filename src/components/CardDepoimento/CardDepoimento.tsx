import type { TipoDepoimento } from '../../data/depoimentos'

type CardDepoimentoProps = {
  depoimento: TipoDepoimento
}

export default function CardDepoimento({ depoimento }: CardDepoimentoProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200">
      <img
        src={depoimento.foto}
        alt={`${depoimento.carro} limpo e brilhando depois da lavagem`}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <p className="text-amber-500" role="img" aria-label="5 de 5 estrelas">
          ★★★★★
        </p>
        <blockquote className="mt-2 text-slate-700">“{depoimento.texto}”</blockquote>
        <p className="mt-4 font-bold text-slate-900">{depoimento.cliente}</p>
        <p className="text-sm text-slate-500">{depoimento.carro}</p>
      </div>
    </article>
  )
}
