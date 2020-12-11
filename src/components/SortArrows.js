import React from 'react'

function SortArrows (props) {
  const { column, currentSort } = props

  let changeIcon = ''

  if (currentSort.indexOf(column) !== -1) {
    switch (true) {
      case /Down/.test(currentSort):
        changeIcon = '▼'
        break
      case /Up/.test(currentSort):
        changeIcon = '▲'
        break
      default:
        changeIcon = ''
        break
    }
  }

  return (
    <p style={{ float: 'right', margin: '.5px 3px 0px 0px', paddingLeft: '5px' }}>{changeIcon}</p>
  )
}


export default SortArrows