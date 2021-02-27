export default function reductor(estado, accion) {
  // console.log(accion)
  switch (accion.type) {
    case "SET_LISTA_PAISES": {
      // return { estado, listaPaises: accion.payload };
      return { ...estado, listaPaises: accion.payload };
    }
    case "FILTRO_POR_NOMBRE": {
      const paisesPorNombre = (estado.listaPaises || []).filter((pais) =>
        pais.name.toLowerCase().includes(accion.payload.toLowerCase())
      );
      return { ...estado, paisesPorNombre };
    }
    case "FILTRO_POR_REGION": {
      const { regionSeleccionada } = accion.payload;
      // se declara {nombreVariable} para extraer el dato del payload
      // si se declara nombreVariable extrae el payload completo

      if ("" === regionSeleccionada) {
        //si entra a la condicion, se limpia el filtro y muestra todos los datos
        return { ...estado, paisesPorRegion: [], filtroPorRegion: "" };
      }
      // si no entra a la condicion crea el filtro con la Region seleccionada
      const paisesPorRegion = estado.listaPaises.filter(
        (pais) => pais.region === regionSeleccionada
      );
      return {
        ...estado,
        paisesPorRegion,
        filtroPorRegion: regionSeleccionada,
      };
    }
    default: {
      return estado;
    }
  }
}
