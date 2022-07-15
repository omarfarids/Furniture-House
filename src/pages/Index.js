import React from 'react'
import Goods from '../components/Goods'
import SearchForm from '../components/SearchForm'

function Index() {
  return (
    <div className='index-page'>
        <SearchForm />
        <Goods />
    </div>
  )
}

export default Index