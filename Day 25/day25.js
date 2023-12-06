async function getData(){
    
    const url1 = 'https://api.github.com/users/rohit3716';
    const url2 = 'https://randomuser.me/api/';
    return await fetch( url1 )
        .then( res1 => res1.json() )
        .then( data1 => {
            return fetch(url2)
                .then((res2) => res2.json() )
                .then( data2 => {
                    const result = {
                        username: data1.name,
                        users: data2.results
                    };
                    return result;
                });
        });
}

getData()
.then( data => console.log(data));

