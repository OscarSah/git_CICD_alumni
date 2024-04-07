let myRespons = {
    body : [
        {name: 'Oscar'},
        {name: 'Amara'},
        {name: 'Sviatlana'}
    ],
    headers: {
        connection: 'keep-alive'
    } ,
    status: 200
}

console.log(myRespons.headers.connection == 'keep-alive');
console.log(myRespons.status == 200);
console.log(myRespons.body);


