<script setup lang="ts">
import { onMounted } from 'vue'
import { useProdutosStore } from '@/stores/produtos'
import ProdutoListView from '@/components/ProdutoListView.vue'

const store = useProdutosStore()

// Alimenta a store ao abrir a página
onMounted(() => {
  store.fetchProdutos()
})
</script>

<template>
  <div>
    <h1>Lista de Produtos</h1>

    <div v-if="store.carregando">Carregando...</div>
    <div v-else-if="store.erro">Erro: {{ store.erro }}</div>

    <div v-else>
      <ProdutoListView
        v-for="produto in store.produtos"
        :key="produto.id"
        :product="produto"
        :isSelecionar="true"
      />
    </div>
  </div>
</template>
