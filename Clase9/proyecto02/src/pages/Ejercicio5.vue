<script setup lang="ts">
  import { ref } from 'vue';

  // Estado para controlar la visibilidad del menú
  const mostrarMenu = ref(false);

  // Estado para almacenar el archivo seleccionado
  const archivo = ref<File | null>(null);

  // Función para manejar el archivo subido
  const subirArchivo = () => {
    if (archivo.value) {
      console.log('Archivo subido:', archivo.value.name);
    }
  };
</script>

<template>
  <!-- Barra de herramientas con un botón para abrir el menú -->
  <v-toolbar color="indigo" dark>
    <v-btn color="white" @click="mostrarMenu = !mostrarMenu">Abrir menú</v-btn>
  </v-toolbar>

  <!-- Menú desplegable -->
  <v-menu v-model="mostrarMenu" :close-on-content-click="false">
    <template #activator="{ props }">
      <!-- Activador del menú (el botón) -->
      <v-btn v-bind="props" color="primary">Abrir menú</v-btn>
    </template>

    <!-- Lista con el formulario de archivo y opciones -->
    <v-list>
        <v-file-input v-model="archivo" label="Subir archivo" truncate-length="15" accept=".jpg, .png, .pdf" />
      <v-list-item>
        <v-list-item-title>Perfil</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Cerrar sesión</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
