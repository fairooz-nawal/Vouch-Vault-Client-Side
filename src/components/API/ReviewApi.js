export const reviewPromise = email => {
        return fetch(`http://localhost:3000/reviews?email=${email}`)
        .then(res => res.json());
    }