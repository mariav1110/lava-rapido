import CardIntegrante from '../../components/CardIntegrante/CardIntegrante'
import { integrantes } from '../../data/integrantes'

export default function Sobre() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900">Sobre</h1>
      <p className="mt-2 max-w-2xl text-slate-600">
        Este site foi feito para o Checkpoint 5 de Front-End Design Engineering (1TDSPI), praticando roteamento de
        páginas com React Router e o compartilhamento de informações com o hook useContext.
      </p>

      <h2 className="mt-12 text-2xl font-extrabold text-slate-900">Integrantes do grupo</h2>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {integrantes.map((integrante) => (
          <li key={integrante.rm}>
            <CardIntegrante integrante={integrante} />
          </li>
        ))}
      </ul>

      <p className="mt-12">
        <a
          href="https://github.com/mariav1110/lava-rapido"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700"
        >
          Ver o projeto no GitHub
        </a>
      </p>
    </div>
  )
}
