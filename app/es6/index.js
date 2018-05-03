import { angularElement as tweets } from './services/tweets'

const bindToAngular = (angular, moduleName) => {
  const angularModule = angular.module(moduleName)
  angularModule.service('tweets', tweets)
}

window.myAppContext = {
  bindToAngular
}
