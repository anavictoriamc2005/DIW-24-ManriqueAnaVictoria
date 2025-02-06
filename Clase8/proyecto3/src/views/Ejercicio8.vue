<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Estado: {{ estadoContador }}</p>
    
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

// Declarar la variable count como ref
const count = ref<number>(0)

// Crear la propiedad computada estadoContador
const estadoContador = computed(() => {
  if (count.value > 0) {
    return 'Positivo'
  } else if (count.value === 0) {
    return 'Cero'
  } else {
    return 'Negativo'
  }
})

// Funciones para incrementar y decrementar el contador
const incrementar = () => {
  count.value++
}

const decrementar = () => {
  count.value--
}
</script>

<style scoped>
/* Puedes agregar estilos aquí si es necesario */
</style>
