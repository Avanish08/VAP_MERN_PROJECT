import React from 'react'

const Rejs = () => {
  
    return (
        <>
        <form action="/" className='bg-sky-500'>
        <label htmlFor="name">
            NAME
        </label>
        <input type="text" name="name" id="name" /> <br />
        <label htmlFor="password"> Password</label>
        <input type="password" name="password" id="pasword" /><br/>
        </form>
        </>
      )
  
}

export default Rejs

