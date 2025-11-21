<template>
  <div class="card">
    <img class="card-img-top" :src="product.image" :alt="product.title" />
    <div class="card-body">
      <h5 class="card-title">
        {{ props.product.title }}
        <span class="badge bg-secondary">{{ props.product.category }}</span>
      </h5>
      <p class="card-text">{{ props.product.description }}</p>
      <div class="card-footer">
        <div>
          Preço: <strong>$ {{ formataPreco(props.product.price) }}</strong>
          <!-- <p v-if="cotacao.Cotacao != null">
            &nbsp; em cotação:
            <strong>@cotacao.Cotacao.ConvertFromUSD(product.Price)?.ToString("#,##0.00")</strong>
          </p> -->
        </div>
        <button v-if="props.isSelecionar" class="btn btn-sm btn-primary" @click="Selecionar">
          Selecionar
        </button>
        <button v-if="!props.isSelecionar" class="btn btn-sm btn-primary" @click="Editar">
          Editar
        </button>
        <button v-if="!props.isSelecionar" class="btn btn-sm btn-danger" @click="Excluir">
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 8px 0;
}

.card-img-top {
  width: 150px;
  height: 150px;
  margin: 2px 0 0 12px;
}

.card-footer {
  display: flex;
  flex-direction: row;
  gap: 6px;
}

.card-footer div:first-child {
  flex: 1;
}
</style>

<script setup lang="ts">
import type { Product } from '@/models/Produto'

const props = withDefaults(
  defineProps<{
    isSelecionar: boolean
    product: Product
  }>(),
  {
    isSelecionar: true,
  },
)

const emit = defineEmits<{
  (e: 'selecionar'): void
  (e: 'editar'): void
  (e: 'excluir'): void
}>()

const formataPreco = (value: number) => value.toFixed(2).replace('.', ',')

const Selecionar = () => emit('selecionar')
const Editar = () => emit('editar')
const Excluir = () => emit('excluir')
</script>
