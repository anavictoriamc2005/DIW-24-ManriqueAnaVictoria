<script setup lang="ts">
  import { ref } from 'vue';

  // Control del diálogo
  const dialog = ref(false);

  // Preferencias de configuración 
  const preferencias = ref({
    notificaciones: false,
    oscuro: false,
    alertas: true,
  });

  // Función para guardar las preferencias
  const guardar = () => {
    console.log('Preferencias guardadas:', preferencias.value);
    dialog.value = false; // Cerrar el diálogo después de guardar
  };

  // Función para cancelar (cerrar el diálogo sin guardar)
  const cancelar = () => {
    dialog.value = false;
  };
</script>

<template>
  <v-btn color="primary" @click="dialog = true">Abrir diálogo</v-btn>

  <!-- Diálogo -->
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title class="headline">Configuraciones</v-card-title>
      <v-card-text>
        <!-- Formulario de preferencias dentro de un v-row -->
        <v-row>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="preferencias.notificaciones"
              label="Activar Notificaciones"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="preferencias.oscuro"
              label="Modo Oscuro"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6">
            <v-checkbox
              v-model="preferencias.alertas"
              label="Recibir Alertas"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-card-text>

      <!-- Botones de acción -->
      <v-card-actions>
        <v-btn text @click="cancelar">Cancelar</v-btn>
        <v-btn text color="primary" @click="guardar">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
