import template from './TweetPage.tpl.html'
import htmlToDomElement from '../utils/htmlToDomElement'
import tweets from '../services/tweets'

class TweetPage extends HTMLElement {
  constructor () {
    super()
    this.tweet = ''
  }

  connectedCallback () {
    window.requestAnimationFrame(() => this.render())
  }

  onChange (value) {
    this.tweet = value
    const {length} = value
    this.querySelector('my-app-character-counter').value = length
    this.querySelector('my-app-progress-bar').value = length
  }

  send () {
    tweets.send({
      tweet: this.tweet
    }).then(() => {
      window.location.hash = '/'
    })
  }

  render () {
    this.innerHTML = ''
    this.appendChild(htmlToDomElement(template))

    const textarea = this.querySelector('textarea')

    textarea.value = this.tweet
    textarea.addEventListener('input', e => this.onChange(e.target.value))

    this
      .querySelector('button')
      .addEventListener('click', () => this.send())
  }
}

export default TweetPage
