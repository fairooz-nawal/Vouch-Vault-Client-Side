export const servicePromise = email => {
        return fetch(`http://localhost:3000/allservices?email=${email}`)
        .then(res => res.json());
    }