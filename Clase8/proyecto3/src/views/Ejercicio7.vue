<script setup lang="ts">
import { ref } from 'vue'
const tareas = ref < string[] > ([]);
</script>

<template>
    <div>
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
            </li>
        </ul>
    </div>
    <input type="text" v-model="tareas" placeholder="Escribe algo..." />
    <button @click="tareas = !tareas">
        Agregar
    </button>

</template>
