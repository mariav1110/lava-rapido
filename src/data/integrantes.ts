export type TipoIntegrante = {
  nome: string
  rm: string
  foto: string
}

// As fotos ficam na pasta public/integrantes/
export const integrantes: TipoIntegrante[] = [
  { nome: 'Maria Vitória Cândida Carvalho', rm: '570850', foto: '/integrantes/mavi.jpg' },
  { nome: 'Yasmin de Oliveira Matsuok', rm: '573083', foto: '/integrantes/yas.jpg' },
]
