function newUser(name, age, country) {
    var name = name || 'Oscar'; //es una forma de dejar por defecto un parametro
    //que no nos dan a la hora de utilizar esta funcion

    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'CO');

function newAdmin(name = 'Oscar', age = 32, country = 'CL'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');