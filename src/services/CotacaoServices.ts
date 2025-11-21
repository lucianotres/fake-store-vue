import type { Cotacao } from '@/models/Cotacao'

class CotacaoService {
  async getCotacao(de: string, para: string): Promise<Cotacao | null> {
    const res = await fetch(`https://economia.awesomeapi.com.br/json/last/${de}-${para}`)
    if (!res.ok) throw new Error('Erro ao buscar cotação!')
    const data = await res.json()
    const firstKey = Object.keys(data)[0] ?? ''
    return data[firstKey] as Cotacao
  }
}

export default new CotacaoService()
