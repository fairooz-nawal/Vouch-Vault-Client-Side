export const servicePromise = (email, accessToken)=> {
        return fetch(`http://localhost:3000/myservices?email=${email}`,{
            headers:{
                authorization: `Bearer ${accessToken}`
            }
        })
        .then(res => res.json());
    }