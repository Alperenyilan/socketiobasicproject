let names = ["Alperen", "Yilan", "Name"];
let age = ["15", "30", "45"];

let greeting = (name) => {
  return `Merhaba $(name)`;
};

module.exports = {
  isim: names,
  yas: age,
  selamla: greeting,
};
