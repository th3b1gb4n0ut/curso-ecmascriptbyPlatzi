//enahced objects literals

function newUser(user, age, country, uId){
    //Ahora no necesitamos hacer la asignacion al mismo tiempo
    //que le hablamos a la variable para cambiar caracteristicas
    //de un objeto
    return{
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser('gndx', 34, 'MX', 1));