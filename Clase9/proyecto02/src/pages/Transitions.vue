<template>
    <v-fade-transition>
    <div v-if="mostrar" class="demo-box">
    ¡Contenido con fade in/out!
    </div>
    </v-fade-transition>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'
    const mostrar = ref(true)
</script>
<style scoped>
    .demo-box {
    width: 200px;
    height: 100px;
    background-color: #42b983;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    }
</style>