const faker = require('faker')

module.exports = {
  list: () => {
    const tweets = []
    const max = faker.random.number({min: 50, max: 200})
    for (let index = 0; index < max; index++) {
      tweets.push({
        name: faker.name.findName(),
        userName: '@' + faker.internet.userName(),
        avatar: faker.image.avatar(),
        tweet: faker.random.words(faker.random.number({min: 5, max: 20})),
        date: faker.date.past(0)
      })
    }

    return tweets
  }
}
