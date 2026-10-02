export type TipoDepoimento = {
  id: number
  cliente: string
  carro: string
  texto: string
  foto: string
}

export const depoimentos: TipoDepoimento[] = [
  {
    id: 1,
    cliente: 'Carlos Henrique',
    carro: 'Ford Coupé clássico vermelho',
    texto: 'Meu clássico vivia cheio de poeira da garagem. Voltou com a pintura brilhando como no primeiro dia!',
    foto: '/depoimentos/carro1.jpg',
  },
  {
    id: 2,
    cliente: 'Fernanda Lima',
    carro: 'Peugeot 208 preto',
    texto: 'Uso o carro todo dia na cidade e ele vivia sujo. Deixei de manhã e já saiu brilhando.',
    foto: '/depoimentos/carro2.jpg',
  },
  {
    id: 3,
    cliente: 'Mariana Souza',
    carro: 'BMW Série 3 azul',
    texto: 'O polimento deixou a pintura parecendo de concessionária. Atendimento rápido e preço justo.',
    foto: '/depoimentos/carro3.jpg',
  },
]