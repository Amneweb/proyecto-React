export const ordenarPorFecha = (array) => {
  console.log("array en ordenar por fecha ", array);
  const sortedArray = array.sort(function (a, b) {
    return b.fecha.seconds - a.fecha.seconds;
  });
  return sortedArray;
};
