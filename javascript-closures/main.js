function graduate(credential) {
  return function fullName(name) {
    return `${name}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Fredrick Rana'));
console.log(lawSchool('Fredrick Rana'));
