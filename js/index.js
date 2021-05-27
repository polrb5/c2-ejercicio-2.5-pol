const esItaliano = (origen) => {
  if (origen[origen.length - 1] === "i") {
    return `${origen}: Este apellido tiene muchas probabilidades de ser italiano`;
  } else if (origen[origen.length - 1] !== "i") {
    return `${origen}:Este apellido podría ser de cualquier país`;
  }
};

const apellido1 = "Ortíz";
const apellido2 = "Cattani";

console.log(esItaliano(apellido1));
console.log(esItaliano(apellido2));
