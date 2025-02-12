<script setup lang="ts">
import { ref } from 'vue'

const nombre = ref('')
const opciones = ['Opción 1', 'Opción 2', 'Opción 3']
const opcionSeleccionada = ref('')
const aceptado = ref(false)
const notificaciones = ref(true)
const color = ref('red')
const archivo = ref<File | null>(null)
const firstName = ref('')
const drawer = ref(false)
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
                        <v-text-field v-model="firstName" label="First name"></v-text-field>


                        <v-text-field label="Nombre" v-model="nombre" outlined clearable />

                        <v-select v-model="opcionSeleccionada" :items="opciones" label="Selecciona una opción" />
                            <v-btn class="mt-2" type="submit" block>Submit</v-btn>


                        <v-checkbox label="Acepto términos y condiciones" v-model="aceptado" />

                        <v-switch label="Activar notificaciones" v-model="notificaciones" />

                        <v-radio-group v-model="color">
                            <v-radio label="Rojo" value="red" />
                            <v-radio label="Azul" value="blue" />
                            <v-radio label="Verde" value="green" />
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
