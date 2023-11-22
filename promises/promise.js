const fakeRequestPromise = (url) => {

    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500 + 500);
        setTimeout(() => {
            if (delay > 4000) {
                reject("connection Timeout: (")
            }
            else {
                resolve("Here is your fake data from ${url}")
            }
        }, delay)
    })
}
fakeRequestPromise("yelp.com/coffee/page1")
    .then(() => {
        console.log("It worked (page 1)")
        return fakeRequestPromise("yelp.com/coffee/page2")
    })
    .then(() => {
        console.log("It worked (page 2)")
        return fakeRequestPromise("yelp.com/coffee/page3")
    })
    .then(() => {
        console.log("It worked (page 3)")
        return fakeRequestPromise("yelp.com/coffee/page4")
    })
    .then(() => {
        console.log("It worked (page 4)")
        return fakeRequestPromise("yelp.com/coffee/page5")
    })
    .catch(() => {
        console.log("REQUEST FAILED")
    })