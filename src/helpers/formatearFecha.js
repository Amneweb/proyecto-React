export const formatearFecha = (fecha) => {
  const timestamp = fecha;
  const date = new Date(timestamp * 1000);

  const anio = date.getFullYear();
  const mes = date.getMonth() + 1;
  const dia = date.getDate();
  const hora = date.getHours();
  const min = date.getMinutes();

  const fechaFormateada =
    dia + " / " + mes + " / " + anio + " " + hora + ":" + min;
  return fechaFormateada;
};
