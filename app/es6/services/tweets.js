const list = () => window
  .fetch('http://localhost:3000/api/tweet')
  .then(r => r.json())

const send = tweet => new Promise(resolve => {
  setTimeout(() => {
    resolve(tweet)
  }, 1000)
})

const tweets = {
  list,
  send
}

export const angularElement = [() => tweets]

export default tweets
