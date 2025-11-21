import { defineStore } from 'pinia'
import ProdutoService from '@/services/ProdutoServices'
import type { Product } from '@/models/Produto'

export const useProdutosStore = defineStore('produtos', {
  state: () => ({
    produtos: [] as Product[],
    carregando: false,
    erro: null as string | null,
  }),

  actions: {
    async fetchProdutos() {
      this.carregando = true
      this.erro = null
      try {
        this.produtos = await ProdutoService.getProdutos()
      } catch {
        this.erro = 'Falhou ao buscar produtos.'
      } finally {
        this.carregando = false
      }
    },
  },
})
