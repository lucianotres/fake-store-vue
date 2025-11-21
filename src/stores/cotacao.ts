import { defineStore } from 'pinia'
import type { Cotacao } from '@/models/Cotacao'
import type { MinhaCotacao } from '@/models/MinhaCotacao'
import CotacaoServices from '@/services/CotacaoServices'

export const useCotacaoStore = defineStore('cotacao', {
  state: () => ({
    cotacao: null as Cotacao | null,
    minhaCotacao: null as MinhaCotacao | null,
    carregando: false,
    erro: null as string | null,
  }),

  actions: {
    getMinhaCotacaoAtual() {
      return this.minhaCotacao
    },

    async setMinhaCotacaoAtual(minhaCotacao: MinhaCotacao | null) {
      this.minhaCotacao = minhaCotacao
      this.erro = 'Falhou ao buscar cotação.'

      if (minhaCotacao !== null && minhaCotacao.de !== null && minhaCotacao.para !== null) {
        console.log(`Buscando nova cotação de ${minhaCotacao.de} para ${minhaCotacao.para}`)

        try {
          this.carregando = true
          const ultimaCotacao = await CotacaoServices.getCotacao(minhaCotacao.de, minhaCotacao.para)

          console.log(`Nova cotação é ${ultimaCotacao?.bid}`)
          this.cotacao = ultimaCotacao
        } catch {
          this.erro = 'Falhou ao buscar cotação.'
        } finally {
          this.carregando = false
        }
      } else {
        this.cotacao = null
      }
    },
  },
})
