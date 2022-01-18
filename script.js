let users = [
    { name: 'Вася ', surname:'Пупкин ', id: 1 },
    { name: 'Петя ', surname:'Иванов ', id: 2 },
    { name: 'Маша ', surname:'Петрова ', id: 3 }
]

let fullname = users.map ((el, i) => el.name + el.surname + el.id);

console.log(fullname)