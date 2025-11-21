<template>
  <label for="cotacao">Cotação:</label>
  <select id="cotacao" class="form-select" v-model="cotacaoEscolhida">
    <option :value="null">--Selecione--</option>
    <option v-for="c in cotacoes" :key="c.para" :value="c.para">{{ c.cotacao }}</option>
  </select>
</template>

<style lang="css" scoped>
:host {
  display: flex;
  flex-direction: row;
  align-items: center;
}

label {
  margin: 0 0 0 18px;
}

select {
  width: 150px;
  margin: 0 0 0 4px;
}
</style>

<script setup lang="ts">
import { MinhaCotacaoSet } from '@/models/MinhaCotacao'
import { useCotacaoStore } from '@/stores/cotacao'
import { ref, watch } from 'vue'

const cotacaoEscolhida = ref<string | null>(null)

const cotacoes = [...MinhaCotacaoSet]

const cotacaoStore = useCotacaoStore()

watch(cotacaoEscolhida, (novoValor, valorAntigo) => {
  console.log('Cotação mudou de', valorAntigo, 'para', novoValor)
  const cotacaoSelecionada = cotacoes.find((c) => c.para === novoValor) ?? null

  cotacaoStore.setMinhaCotacaoAtual(cotacaoSelecionada)
})
</script>
