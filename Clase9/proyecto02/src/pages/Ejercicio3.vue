<script setup lang="ts">
  import { ref } from 'vue';

  const datos = ref<string[]>([]);

  // Llenamos el array con 1000 elementos de ejemplo
  for (let i = 1; i <= 1000; i++) {
    datos.value.push(`Item ${i}`);
  }

  const switchVirtual = ref(false); // Esta variable controlará la vista

  const notificaciones = ref(false);
</script>

<template>
  <v-switch
    label="Activar notificaciones"
    v-model="notificaciones"
  />
  
  <v-switch
    label="Vista Virtual"
    v-model="switchVirtual"
  />

  <!--  switchVirtual  false, usamos v-data-iterator con paginación  , con alto de las paginasitems-per-page="10"  -->
  <div v-if="!switchVirtual">
    <v-data-iterator
      :items="datos"
      :items-per-page="10" 
      item-key="index"
    >
      <template v-slot:default="{ items }">
        <ul>
          <li v-for="(item, index) in items" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </v-data-iterator>
  </div>

  <!-- Si switchVirtual es true, usamos v-virtual-scroll , anchurade los items item-height="50-->
  <div v-else>
    <v-virtual-scroll
      :items="datos"
      :item-height="50" 
      item-key="index"
    >
      <template v-slot:default="{ item }">
        <div class="item">
          {{ item }}
        </div>
      </template>
    </v-virtual-scroll>
  </div>
</template>

