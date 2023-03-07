import React from 'react'

function Helmet({title , children}) {

    document.title = 'CloClothes - ' + title

  return (
    <div>{children}</div>
  )
}

export default Helmet