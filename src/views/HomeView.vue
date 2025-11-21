<script setup lang="ts">
import { useCotacaoStore } from '@/stores/cotacao'

const cotacaoStore = useCotacaoStore()
</script>

<template>
  <h1>Loja Fake</h1>
  <p>Bem vindos a nossa loja fake!</p>

  <p>Escolha uma opção no menu para iniciar</p>

  <p v-if="cotacaoStore.cotacao !== null">
    Escolhido cotação atual em {{ cotacaoStore.cotacao.name }}:
    <strong>{{ cotacaoStore.cotacao.codein }} = {{ cotacaoStore.cotacao.bid }}</strong>
  </p>
</template>
