import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
function UserHeaderLayout() {
  return (
    <div>
        <SearchForm></SearchForm>
         <div>Cart</div>
         <div>Logout</div>
    </div>
  )
}

export default UserHeaderLayout