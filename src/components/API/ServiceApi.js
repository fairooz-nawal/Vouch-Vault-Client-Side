export const servicePromise = email => {
        return fetch(`http://localhost:3000/myservices?email=${email}`)
        .then(res => res.json());
    }