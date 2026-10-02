import { Outlet } from 'react-router-dom'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <Cabecalho />
      <main className="flex-1">
        <Outlet />
      </main>
      <Rodape />
    </div>
  )
}
