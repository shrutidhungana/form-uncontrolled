import React from 'react'

const Form = () => {

  const handleFormSubmit = () =>{}

  return (
      <div>
          <form action = "" onSubmit = {handleFormSubmit}>
              <input name = "name" placeholder = "Name"/>
              <input />
              <button>Submit</button>
          </form>
      </div>
  )
}

export default Form