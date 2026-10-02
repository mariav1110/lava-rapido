export type TipoServico = {
  id: string
  nome: string
  descricao: string
  preco: number
  icone: string
}

export const servicos: TipoServico[] = [
  {
    id: 'simples',
    nome: 'Lavagem Simples',
    descricao: 'Lavagem externa com shampoo neutro, secagem com microfibra e pretinho nos pneus.',
    preco: 40,
    icone: '💧',
  },
  {
    id: 'completa',
    nome: 'Lavagem Completa',
    descricao: 'Lavagem externa mais aspiração, limpeza do painel, dos vidros e dos tapetes.',
    preco: 70,
    icone: '✨',
  },
  {
    id: 'polimento',
    nome: 'Polimento + Cera',
    descricao: 'Remove riscos leves e devolve o brilho de carro novo, com cera de proteção.',
    preco: 150,
    icone: '💎',
  },
]

export function buscarServico(id: string) {
  return servicos.find((servico) => servico.id === id)
}

export function formatarPreco(valor: number) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
