import React, {useState} from 'react'
import './addressEdit.css'
const AddressEditForm = () => {
    const [IsOpen , setIsOpen] = useState(false);
    const [data , setData] = useState({
        address:'',
        type:'Home',
        AddressLine1:'',
        AddressLine2:'',
    })
    const openForm = () =>{
        setIsOpen(true);
    }
    const Closeform = () =>{
        setIsOpen(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
          [name]: value,
        });
      };
    
      const submitForm = () => {
        console.log('Form Data:', data);
        Closeform();
      };
    
  return (
    <>
    <div className="address-form-container">
      <button className="edit-button" onClick={openForm}>
        Edit
      </button>

      {IsOpen && (
        <div className="popup-form">
          <h2>Address Form</h2>
          <form>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={data.address}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="type">Type:</label>
            <select
              id="type"
              name="type"
              value={data.type}
              onChange={handleInputChange}
              required
            >
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="AddressLine1">Address Line 1:</label>
            <input
              type="text"
              id="AddressLine1"
              name="AddressLine1"
              value={data.AddressLine1}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="AddressLine2">Address Line 2:</label>
            <input
              type="text"
              id="AddressLine2"
              name="AddressLine2"
              value={data.AddressLine2}
              onChange={handleInputChange}
            />

            <button type="button" onClick={submitForm}>
              Submit
            </button>
          </form>
          <button className="close-button" onClick={Closeform}>
            Close
          </button>
        </div>
      )}
    </div>
    </>
  )
}

export default AddressEditForm