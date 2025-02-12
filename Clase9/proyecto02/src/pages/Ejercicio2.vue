<script setup lang="ts">
import { ref } from 'vue'

const nombre = ref('')
const opciones = ['Opción 0', 'Opción 1', 'Opción 2']
const opcionSeleccionada = ref('')
const aceptado = ref(false)
const notificaciones = ref(true)
const color = ref('red')
const archivo = ref<File | null>(null)
const drawer = ref(false)

//Que me muestre por consola para v-model para vincular cada input a una variable reactiva.
watch(nombre, (newVal) => {
    console.log(`Nombre cambiado a: ${newVal}`)
})
watch(opcionSeleccionada, (newVal) => {
    console.log(`Opción seleccionada: ${newVal}`)
})

watch(notificaciones, (newVal) => {
    console.log(`Notificaciones activadas: ${newVal}`)
})

watch(color, (newVal) => {
    console.log(`Color seleccionado: ${newVal}`)
})

watch(archivo, (newVal) => {
    console.log(`Archivo subido: ${newVal ? newVal.name : 'Ninguno'}`)
})
</script>

<template>
    <v-app>
        <v-app-bar color="primary" dark>
            <v-app-bar-nav-icon @click="drawer
            = !drawer" />
            <span class="title ml-3">Mi
            App</span>
        </v-app-bar>

        <v-container class="fill-height d-flex justify-center align-center">
            <v-card class="form-card">
                <v-sheet class="form-container">
                    <v-form @submit.prevent class="form-content">
                        
                        <v-select v-model="opcionSeleccionada" :items="opciones" label="Selecciona una opción" />


                        <v-checkbox label="Acepto términos y condiciones" v-model="aceptado" />
                        <v-radio-group v-model="color">
                            <v-radio label="Rosa" value="pink" />
                            <v-radio label="Azul" value="blue" />
                            <v-radio label="Rojo" value="red" />
                        </v-radio-group>

                        <v-file-input v-model="archivo" label="Subir archivo" truncate-length="15" accept=".jpg, .png, .pdf" />
                        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
                    </v-form>
                </v-sheet>
            </v-card>
        </v-container>
    </v-app>
</template>

<style scoped>

/* Centramos el formulario */
.form-card {
    max-width: 400px;
    width: 500px;
    height: 800px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Ajustamos el contenedor del formulario */
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

/* Ajustamos el contenido del formulario */
.form-content {
    width: 100%;
}
</style>
