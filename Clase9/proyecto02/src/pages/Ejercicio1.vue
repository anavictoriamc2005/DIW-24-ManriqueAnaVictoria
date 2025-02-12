<script setup lang="ts">
import { ref } from 'vue'

// Estado para el menú desplegable
const mostrarMenu = ref(false)

// Elementos del menú de navegación
const items = ref(['Inicio', 'Acerca de', 'Contacto', 'Servicios', 'Blog'])
</script>

<template>
    <v-app-bar color="primary" dark>
        <!-- Nombre de la aplicación -->
        <span class="title ml-3">Mi App</span>

        <!-- Menú de navegación -->
        <v-menu v-model="mostrarMenu" :close-on-content-click="false">
            <template #activator="{ props }">
                <v-btn v-bind="props" class="ml-3">Menú</v-btn>
            </template>

            <v-card>
                <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>


