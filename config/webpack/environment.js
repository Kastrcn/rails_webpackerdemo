const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const vue =  require('./loaders/vue')
const erb =  require('./loaders/erb')

environment.loaders.append('erb', erb)
environment.loaders.append('vue', vue)
environment.loaders.append('typescript', typescript)
module.exports = environment
