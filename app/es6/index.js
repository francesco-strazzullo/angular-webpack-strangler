import { angularElement as tweets } from './services/tweets'
import ProgressBar from './components/ProgressBar'
import CharacterCounter from './components/CharacterCounter'
import TweetPage from './components/TweetPage'

window.customElements.define('my-app-progress-bar', ProgressBar)
window.customElements.define('my-app-character-counter', CharacterCounter)
window.customElements.define('my-app-tweet-page', TweetPage)

const bindToAngular = (angular, moduleName) => {
  const angularModule = angular.module(moduleName)
  angularModule.service('tweets', tweets)
}

window.myAppContext = {
  bindToAngular
}
