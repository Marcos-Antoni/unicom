import FunStor from "../components/funciones/store";
import FunGlo from "../components/funciones/globales";

export const state = () => ({
  listPopulares: [
    {
      img: "/cursos_de_prueva/curso1.jpeg",
      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 2,
      nuevo: true,
      precio: 0.05,
      usos: 75
    },
    {
      img: "/cursos_de_prueva/curso2.jpeg",

      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 1,
      nuevo: true,
      precio: 0.05,
      usos: 75
    },
    {
      img: "/cursos_de_prueva/curso1.jpeg",
      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 1,
      nuevo: false,
      precio: 0.05,
      usos: 75
    },
    {
      img: "/cursos_de_prueva/curso1.jpeg",
      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 1,
      nuevo: true,
      precio: 0.05,
      usos: 75
    }
  ],

  listProfesores: [
    {
      img: "/profesores/prof1.jpeg",
      nombre: "Andrea Meza",
      profecion: "Derech",
      univercidad: 2
    },
    {
      img: "/profesores/prof2.jpeg",
      nombre: "Gonzalo Jesús",
      profecion: "Ing",
      univercidad: 3
    },
    {
      img: "/profesores/prof1.jpeg",
      nombre: "Andrea Meza",
      profecion: "Derech",
      univercidad: 2
    },
    {
      img: "/profesores/prof1.jpeg",
      nombre: "Andrea Meza",
      profecion: "Derech",
      univercidad: 2
    },
    {
      img: "/profesores/prof1.jpeg",
      nombre: "Andrea Meza",
      profecion: "Derech",
      univercidad: 2
    },
    {
      img: "/profesores/prof1.jpeg",
      nombre: "Andrea Meza",
      profecion: "Derech",
      univercidad: 2
    },
    {
      img: "/profesores/prof1.jpeg",
      nombre: "Andrea Meza",
      profecion: "Derech",
      univercidad: 2
    },
    {
      img: "/profesores/prof1.jpeg",
      nombre: "Andrea Meza",
      profecion: "Admin",
      univercidad: 1
    }
  ],

  listCategorias: [
    {
      img: "/categorias/prueba1.png",
      nombre: "Comida y postres",
      disponible: true,
      univercidad: 3
    },
    {
      img: "/categorias/prueba1.png",
      nombre: "Comida y postres",
      disponible: false,
      univercidad: 3
    },
    {
      img: "/categorias/prueba1.png",
      nombre: "Comida y postres",
      disponible: false,
      univercidad: 3
    },
    {
      img: "/categorias/prueba1.png",
      nombre: "Comida y postres",
      disponible: false,
      univercidad: 3
    }
  ],

  ListaCurso: [
    {
      titulo: "Primera parte",
      videos: [
        { url: "", disponible: true, porsentage: 75, nombre: "curso 1" },
        { url: "", disponible: true, porsentage: 8, nombre: "curso 2" },
        { url: "", disponible: true, porsentage: "tarea", nombre: "tarea 1" }
      ]
    },
    {
      titulo: "Pc1",
      videos: [
        { url: "", disponible: true, porsentage: 85, nombre: "curso 3" },
        { url: "", disponible: false, porsentage: 0, nombre: "curso 4" }
      ]
    },
    {
      titulo: "Pc1",
      videos: [
        { url: "", disponible: true, porsentage: 85, nombre: "curso 3" },
        { url: "", disponible: false, porsentage: 0, nombre: "curso 4" }
      ]
    },
    {
      titulo: "Pc1",
      videos: [
        { url: "", disponible: true, porsentage: 85, nombre: "curso 3" },
        { url: "", disponible: false, porsentage: 0, nombre: "curso 4" }
      ]
    }
  ],

  ListCompras: [
    {
      img: "/cursos_de_prueva/curso1.jpeg",
      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 2,
      nuevo: true,
      precio: 0.05,
      usos: 75,
      cantidad: 1
    },
    {
      img: "/cursos_de_prueva/curso2.jpeg",

      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 1,
      nuevo: true,
      precio: 0.07,
      usos: 75,
      cantidad: 1
    },
    {
      img: "/cursos_de_prueva/curso1.jpeg",
      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 1,
      nuevo: false,
      precio: 0.05,
      usos: 75,
      cantidad: 1
    },
    {
      img: "/cursos_de_prueva/curso1.jpeg",
      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 2,
      nuevo: true,
      precio: 0.05,
      usos: 75,
      cantidad: 1
    },
    {
      img: "/cursos_de_prueva/curso2.jpeg",

      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 1,
      nuevo: true,
      precio: 0.07,
      usos: 75,
      cantidad: 1
    },
    {
      img: "/cursos_de_prueva/curso1.jpeg",
      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 1,
      nuevo: false,
      precio: 0.05,
      usos: 75,
      cantidad: 1
    },
    {
      img: "/cursos_de_prueva/curso1.jpeg",
      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 2,
      nuevo: true,
      precio: 0.05,
      usos: 75,
      cantidad: 1
    },
    {
      img: "/cursos_de_prueva/curso2.jpeg",

      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 1,
      nuevo: true,
      precio: 0.07,
      usos: 75,
      cantidad: 1
    },
    {
      img: "/cursos_de_prueva/curso1.jpeg",
      titulo: "matemática Aplicadas",
      profesor: "Juan Alverto",
      univercidad: 1,
      nuevo: false,
      precio: 0.05,
      usos: 75,
      cantidad: 1
    }
  ],

  gratis: false,
  verificado: 0,
  login: false,
  precio_de_la_compra_total: 0,
  partes_del_curso: []
});

export const getters = {
  listaNuevos(state) {
    let listaDepurada = state.listPopulares.filter(lista => {
      return lista.nuevo;
    });

    return listaDepurada;
  },

  precioDeCompra(state) {
    let precio = FunGlo.sumarPrecios(state.ListCompras, "precio", false);
    return precio;
  },

  ListaCursoEditada(state) {
    const arrayOrdenado = FunStor.ordenarArray(state.partes_del_curso),
      newListaCurso = FunStor.newArray(arrayOrdenado, state.ListaCurso);

    return newListaCurso;
  }
};

export const mutations = {
  gratis_on_of(state, boolean) {
    state.gratis = boolean;
  },

  modificar_verificacion(state, tipo) {
    state.verificado = tipo;
  },

  on_of_login(state) {
    state.login = !state.login;
  },

  new_total_de_la_compra(state, numero) {
    if (Number(numero)) {
      state.precio_de_la_compra_total = numero;
    }
  },

  colocarar_partes_del_Curso(state, array) {
    if (typeof array == "object") {
      state.partes_del_curso = array;
    }
  }
};
