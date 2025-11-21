import type { Product } from '@/models/Produto'

class ProdutoService {
  async getProdutos(): Promise<Product[]> {
    const res = await fetch('https://fakestoreapi.com/products')
    if (!res.ok) throw new Error('Erro ao buscar produtos')
    return res.json()
  }
}

export default new ProdutoService()
