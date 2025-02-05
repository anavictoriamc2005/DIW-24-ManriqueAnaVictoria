<template>
    <button @click="contador = !contador">
        Incrementar
    </button>
    <button @click="contador = !contador">
        Decrementar
    </button>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
const contador = ref(0)
// console.log(contador.value) // 1
const estado = computed (() => {if (contador.value === 0){
    return 'Cero';
} if (contador.value < 0)});


</script>