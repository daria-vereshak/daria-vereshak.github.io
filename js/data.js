// const USERS = {
//   first: 10,
//   second: 30,
//   third: 15,
//   forth: 2
// };
// let jsonUsers = JSON.stringify(USERS);
// localStorage.setItem('users', jsonUsers);

const WORDS = [
  {value: 'июнь', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'потолок', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 1}, 
  {value: 'скорость', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'министр', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'адрес', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'позиция', easyFirst: 0, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'май', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'долг', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'дом', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'клетка', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 2}, 
  {value: 'основное', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'июль', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'предложение', easyFirst: 0, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'отличие', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'ухо', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 2}, 
  {value: 'жертва', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 2}, 
  {value: 'источник', easyFirst: 0, hardFirst: 0, easySecond: 2, hardSecond: 1}, 
  {value: 'общество', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'храм', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'сон', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'церковь', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 2}, 
  {value: 'родственник', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 1}, 
  {value: 'память', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 2}, 
  {value: 'оценка', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'сотрудник', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 1}, 
  {value: 'миг', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'событие', easyFirst: 0, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'устройство', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'суть', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 2}, 
  {value: 'трава', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 2}, 
  {value: 'ум', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'штат', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'эксперт', easyFirst: 0, hardFirst: 0, easySecond: 1, hardSecond: 1}, 
  {value: 'монастырь', easyFirst: 0, hardFirst: 0, easySecond: 2, hardSecond: 1}, 
  {value: 'подход', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'шум', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'течение', easyFirst: 0, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'мысль', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 2}, 
  {value: 'сотрудничество', easyFirst: 0, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'профессор', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'переговорщик', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 1}, 
  {value: 'нарушение', easyFirst: 0, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'мешок', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'лед', easyFirst: 1, hardFirst: 1, easySecond: 1, hardSecond: 1}, 
  {value: 'телевизор', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 1}, 
  {value: 'конструкция', easyFirst: 0, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'молодежь', easyFirst: 0, hardFirst: 0, easySecond: 2, hardSecond: 2}, 
  {value: 'пора', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 2}, 
  {value: 'вариант', easyFirst: 1, hardFirst: 0, easySecond: 2, hardSecond: 1}, 
  {value: 'ноябрь', easyFirst: 0, hardFirst: 1, easySecond: 1, hardSecond: 1}
];

export {WORDS};