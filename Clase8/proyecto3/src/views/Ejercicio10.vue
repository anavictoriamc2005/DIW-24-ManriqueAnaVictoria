<template>
    <div>
      <h3>Contador: {{ contador }}</h3>
      <button @click="incrementarContador">Incrementar</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, watch } from 'vue'
  
  // Declaramos una variable reactiva 'contador'
  const contador = ref(0)
  
  // Usamos onMounted para imprimir un mensaje en consola cuando el componente se monte
  onMounted(() => {
    console.log('Componente montado')
  })
  
  // Usamos onUnmounted para imprimir un mensaje cuando el componente se desmonte
  onUnmounted(() => {
    console.log('Componente desmontado')
  })
  
  // Usamos watch para ver los cambios en 'contador' y registrarlos en consola
  watch(contador, (nuevoValor) => {
    console.log(`El valor del contador ha cambiado a: ${nuevoValor}`)
  })
  
  // Función para incrementar el contador
  function incrementarContador() {
    contador.value++
  }
  </script>
  