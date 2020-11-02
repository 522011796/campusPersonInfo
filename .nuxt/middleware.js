const middleware = {}

middleware['middleRouter'] = require('../middleware/middleRouter.js')
middleware['middleRouter'] = middleware['middleRouter'].default || middleware['middleRouter']

export default middleware
