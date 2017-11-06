import React from 'react'

const Logo = () => {

  const dateString = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    if(dd<10) {dd = '0'+dd}
    if(mm<10) {mm = '0'+mm}
    return (mm + "/" + dd)
  }


  return(
    <div>
      <h1 id="logo-main">THIS DATE IN HISTORY</h1>
      <h2 id="logo-sub">Search NYTimes Archives For {dateString()}</h2>
    </div>
  )
}

export default Logo
