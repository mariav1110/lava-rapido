import { useState } from 'react'
import type { TipoIntegrante } from '../../data/integrantes'

type CardIntegranteProps = {
  integrante: TipoIntegrante
}

const FOTO_PADRAO = '/integrantes/placeholder.svg'

export default function CardIntegrante({ integrante }: CardIntegranteProps) {
  // Se a foto não existir na pasta public/integrantes, mostra uma imagem padrão
  const [fotoComErro, setFotoComErro] = useState(false)

  return (
    <article className="rounded-2xl bg-white p-6 text-center shadow-md ring-1 ring-slate-200">
      <img
        src={fotoComErro ? FOTO_PADRAO : integrante.foto}
        onError={() => setFotoComErro(true)}
        alt={`Foto de ${integrante.nome}`}
        className="mx-auto size-32 rounded-full object-cover ring-4 ring-sky-200"
      />
      <h3 className="mt-4 text-lg font-extrabold text-slate-900">{integrante.nome}</h3>
      <p className="mt-1 font-semibold text-sky-700">RM {integrante.rm}</p>
    </article>
  )
}
