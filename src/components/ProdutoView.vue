<template>
  <div class="h-100 d-flex flex-column align-items-center justify-content-center">
    <div class="row formStyle p-0">
      <div class="col-12 col-md-12 p-4">
        <form @submit.prevent="Salvar">
          <div class="mb-6">
            <label class="form-label" for="title">Título</label>
            <input
              class="form-control"
              type="text"
              id="title"
              placeholder="Título para o produto"
              v-model="product.title"
            />
          </div>
          <div class="mb-6">
            <label class="form-label" for="price">Preço</label>
            <input
              class="form-control"
              type="number"
              step="0.01"
              id="price"
              placeholder="Preço"
              v-model.number="product.price"
            />
          </div>
          <div class="mb-6">
            <label class="form-label" for="descr">Descrição</label>
            <input
              class="form-control"
              type="text"
              id="descr"
              placeholder="Descrição para o produto"
              v-model="product.description"
            />
          </div>
          <div class="mb-6">
            <label class="form-label" for="image">Imagem</label>
            <input
              class="form-control"
              type="url"
              id="image"
              placeholder="Imagem"
              v-model="product.image"
            />
          </div>

          <div class="text-end">
            <button type="submit" class="btn btn-success me-1">Salvar</button>
            <button type="button" class="btn btn-danger" @onclick="Cancelar">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-label {
  margin-bottom: 0;
}

.text-end {
  margin-top: 8px;
}

.formStyle div:first-child {
  min-width: 400px;
}
</style>

<script setup lang="ts">
import { reactive } from 'vue'
import type { Product } from '@/models/Produto'

const product = reactive<Product>({} as Product)

const Salvar = () => {}

const Cancelar = () => {}
</script>
