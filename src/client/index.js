import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { apiCall } from './js/api'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

apiCall()

export {
    apiCall
   }