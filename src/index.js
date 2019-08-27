import choo from 'choo'

import main from './templates/main'

const app = choo()

app.route('/', main)

app.mount('div')
