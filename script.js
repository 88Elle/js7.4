let users = [
    { name: 'Вася ', surname:'Пупкин ', id: 1 },
    { name: 'Петя ', surname:'Иванов ', id: 2 },
    { name: 'Маша ', surname:'Петрова ', id: 3 }
]

for(let i = 0; i < users.length;i++){

 let fullname = users.map ((el, i) => el.name + el.surname + el.id);

 console.log(fullname[i]);
}
