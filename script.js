let users = [
    { name: 'Вася ', surname:'Пупкин ', id: 1 },
    { name: 'Петя ', surname:'Иванов ', id: 2 },
    { name: 'Маша ', surname:'Петрова ', id: 3 }
]

let fullname = users.map ((el) => {
    let newUsers = {
        fullname: (el.name + el.surname), id:el.id 
}

    console.log(newUsers);
});

   