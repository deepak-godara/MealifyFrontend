import React,{Fragment} from 'react'
import './ClientHeader.css'
import SearchForm from '../SearchForm/SearchForm'
function ClientHeader() {
  return (
    <Fragment>
<SearchForm></SearchForm>
    <div className='client-logout'>Logout</div>
    </Fragment>
  )
}

export default ClientHeader