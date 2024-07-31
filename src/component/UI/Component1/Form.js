import React ,{useState}from 'react'

function Form() {
    const [Name,SetName]=useState();
    const [Email,SetEmail]=useState();
    const [Password,SetPassword]=useState();
  return (
    <form>
        {/* <div className='form-div'>
            <label> Name</label>
            <input  type='text' value={Name} onChange={NameChangeHandler} ></input>
        </div>
        <div>
            <label> Email</label>
            <input  type='text' value={Name} onChange={NameChangeHandler} ></input>
        </div>
        <div>
            <label> Password</label>
            <input  type='text' value={Name} onChange={NameChangeHandler} ></input>
        </div>
        <button>Submit</button> */}
    </form>
  )
}

export default Form