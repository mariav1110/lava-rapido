import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TicketContext } from '../../context/TicketContext'

const links = [
  { to: '/', texto: 'Home' },
  { to: '/agendamentos', texto: 'Agendamentos' },
  { to: '/sobre', texto: 'Sobre' },
]

export default function Cabecalho() {
  // Cada tíquete na fila é um carro aguardando lavagem
  const { tickets } = useContext(TicketContext)
  const aguardando = tickets.length

  return (
    <header className="sticky top-0 z-10 bg-sky-800 text-white shadow-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="text-2xl font-extrabold">
          🚿 Brilho Total
        </Link>

        <nav aria-label="Menu principal">
          <ul className="flex gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-full px-4 py-2 font-semibold transition ${
                      isActive ? 'bg-white text-sky-800' : 'hover:bg-sky-600'
                    }`
                  }
                >
                  {link.texto}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <p aria-live="polite" className="rounded-full bg-amber-400 px-4 py-2 font-bold text-slate-900">
          🚗 {aguardando} {aguardando === 1 ? 'carro aguardando' : 'carros aguardando'}
        </p>
      </div>
    </header>
  )
}
