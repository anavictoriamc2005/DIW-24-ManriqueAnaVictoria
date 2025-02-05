<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  //Ejercicio1

  let Coordenadas = [30.000 , 60.000, 90.000];
  type Coordenadas = [latitud: number, longitud: number];
  let resultado: Coordenadas = [30.000 , 60.000];


  //Ejercicio2
  let idUsuario: number | string;
  idUsuario = 'ABC';
  idUsuario = '336'
  function imprimirId(id: number | string) {
    if (typeof id === 'string'){
      console.log('En mayúsuclas es:', id);
    }else {
      console.log('Sumar i:');
    }
  
  }

  console.log(imprimirId);

  //Ejercicio3
  interface Producto {
  id: number;
  nombre: string;
  precio: number;
  }

  function actualizarProducto(producto: Producto, cambios: Partial<Producto>): Producto {
    // Combina el producto original con los cambios y devuelve un nuevo objeto
    return { ...producto, ...cambios };
  }

  // Ejemplo de uso
  const productoOriginal: Producto = {
    id: 1,
    nombre: "Ordenador",
    precio: 500
  };

  // Se actualiza solo el precio del producto
  const cambios = {
    precio: 499
  };

const productoActualizado = actualizarProducto(productoOriginal, cambios);

console.log(productoActualizado);


//Ejercicio4
interface Configuracion{
  url?:string;
  puerto?:number;
}
//Aqui definimos la funcion requerida
function inicializarApp (config: Required<Configuracion>){
  console.log(`Iniciando en
  ${config.url}:${config.puerto}`);

}
//Accedemos a el 
inicializarApp({ url: 'localhost', puerto: 8080 });

//Ejercicio5
// Definimos el tipo literal para los roles de usuario
type Rol = 'admin' | 'editor' | 'viewer';

// Usamos Record para crear el tipo Permisos
type Permisos = Record<Rol, boolean>;

// Declaramos la variable permisosUsuario y  luego asignamos  valores booleanos
const permisosUsuario: Permisos = {
  admin: true,
  editor: false,
  viewer: true,
};

// Accedemos a un permiso específico por consola 
console.log('Permiso de el admin es:', permisosUsuario.admin);  
console.log('Permiso de el  editor es:', permisosUsuario.editor);  
console.log('Permiso de el viewer es :', permisosUsuario.viewer);  


</script>
