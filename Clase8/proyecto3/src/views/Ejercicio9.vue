<template>
    <div>
      <h3>{{ mensaje }}</h3>
      <button @click="emitirRespuesta">Enviar Respuesta</button>
    </div>
</template>
  
<script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    mensaje: String, // Prop para recibir un mensaje
  })
  
  const emit = defineEmits(['respuesta']) // Evento "respuesta"
  
  function emitirRespuesta() {
    emit('respuesta', 'Mensaje desde el hijo') // Emitimos evento con un string al padre
  }
</script>
//Componente padre
<template>
    <div>
      <Child :mensaje="mensajeHijo" @respuesta="manejarRespuesta" />
      <p>Respuesta del hijo: {{ respuestaHijo }}</p>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue'
  import Child from './Child.vue'
  
  const mensajeHijo = ref('Mensaje desde el padre') // Prop que pasa el padre al hijo
  const respuestaHijo = ref('') // Variable  para almacenar la respuesta del hijo
  
  // Método en la que manejamos la respuesta cuando se emite el evento "respuesta" del hijo
  function manejarRespuesta(respuesta) {
    respuestaHijo.value = respuesta
  }
</script>
  

  