import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const blankFormURL = '/driverForm'; // Replace with the actual URL of the blank form page

const styles = {
  driverFormContainer: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  driverFormHeading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  formLabel: {
    fontWeight: 'bold',
  },
  formInput: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  formSubmitBtn: {
    backgroundColor: '#006D5B',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  formSubmitBtnHover: {
    backgroundColor: '#006D5B',
  },
  messageContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
};
const DriverForm = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleImageChange = (event) => {
      const selectedFile = event.target.files[0];
      setImage(selectedFile);
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('image', image);
      formData.append('description', description);
  
      try {
        // change this to real endpoint laters
        const response = await fetch('/backend-endpoint', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          console.log('Form data successfully submitted');
          setImage(null);
          setDescription('');
          setSubmitted(true);
        } else {
          console.log('Error submitting form data');
        }
      } catch (error) {
        console.log('Error submitting form data:', error);
      }
    };
  
    return (
      <div style={styles.driverFormContainer}>
        {!submitted ? (
          <div>
            <h1 style={styles.driverFormHeading}>Driver Form</h1>
            <form onSubmit={handleSubmit}>
              <div style={styles.formGroup}>
                <label htmlFor="image" style={styles.formLabel}>
                  Image:
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  style={styles.formInput}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label htmlFor="description" style={styles.formLabel}>
                  What did you do today?
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  style={styles.formInput}
                  required
                ></textarea>
              </div>
              <button type="submit" style={styles.formSubmitBtn}>
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div style={styles.messageContainer}>
            <h2>Thanks bye bye!</h2>
          </div>
        )}
        {/* <QRCode value={blankFormURL} /> */}
      </div>
    );
  };
  
  export default DriverForm;