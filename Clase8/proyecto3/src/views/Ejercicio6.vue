<template>
    <div>
    <button @click="mostrarMensaje = !mostrarMensaje">
    ToggleMessage.vue
    </button>
    <!-- Este párrafo solo se muestra si 'mostrar' es true -->
    <p v-if="mostrarMensaje">¡Hola,Vue!</p>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    const mostrarMensaje = ref(true)
</script>