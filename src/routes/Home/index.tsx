import { Link } from 'react-router-dom'
import CardDepoimento from '../../components/CardDepoimento/CardDepoimento'
import CardServico from '../../components/CardServico/CardServico'
import { depoimentos } from '../../data/depoimentos'
import { servicos } from '../../data/servicos'

export default function Home() {
  return (
    <>
      {/* Apresentação */}
      <section className="bg-linear-to-br from-sky-800 to-cyan-500 text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="font-bold tracking-widest text-amber-300 uppercase">Lava-Rápido</p>
            <h1 className="mt-2 text-4xl font-extrabold md:text-5xl">
              Seu carro limpo, brilhando e sem enrolação
            </h1>
            <p className="mt-4 text-lg text-sky-50">
              Na Brilho Total você agenda online, deixa o carro com a gente e retira tudo limpinho. Produtos de
              qualidade, equipe cuidadosa e preço justo.
            </p>
            <Link
              to="/agendamentos"
              className="mt-8 inline-block rounded-full bg-amber-400 px-8 py-3 text-lg font-bold text-slate-900 shadow-lg transition hover:bg-amber-300"
            >
              Agendar minha lavagem
            </Link>
          </div>
          <img
            src="/carrodestaque.png"
            alt="Carro limpo e brilhando depois da lavagem"
            className="h-80 w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* Serviços */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-center text-3xl font-extrabold text-slate-900">Nossos serviços</h2>
        <p className="mt-2 text-center text-slate-600">Escolha o tipo de lavagem ideal para o seu carro.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {servicos.map((servico) => (
            <CardServico key={servico.id} servico={servico} />
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-sky-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-slate-900">O que nossos clientes dizem</h2>
          <p className="mt-2 text-center text-slate-600">Carros lavados e clientes satisfeitos.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {depoimentos.map((depoimento) => (
              <CardDepoimento key={depoimento.id} depoimento={depoimento} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
