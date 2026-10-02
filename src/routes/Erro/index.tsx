import { Link } from 'react-router-dom'

export default function Erro() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 p-4 text-center">
      <div>
        <p className="text-6xl" aria-hidden="true">
          🚧
        </p>
        <h1 className="mt-4 text-3xl font-extrabold text-slate-900">Página não encontrada</h1>
        <p className="mt-2 text-slate-600">O endereço que você tentou acessar não existe.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-sky-700 px-6 py-3 font-bold text-white transition hover:bg-sky-800"
        >
          Voltar para a Home
        </Link>
      </div>
    </main>
  )
}
