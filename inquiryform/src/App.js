// import React, { useState, useEffect } from "react";
// import './App.css';

// const App = () => {
//   const [showInquiryForm, setShowInquiryForm] = useState(false);
//   const [showContactOptions, setShowContactOptions] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
//   const [errors, setErrors] = useState({}); // Track errors for highlighting

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth >= 769);
//     };
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleEnquiryClick = () => {
//     setShowInquiryForm(!showInquiryForm);
//   };

//   const handleBookNowClick = () => {
//     setShowContactOptions(!showContactOptions);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const inquiryData = Object.fromEntries(formData.entries());
    
//     // Custom validation to check for empty fields
//     const newErrors = {};
//     for (const [key, value] of formData.entries()) {
//       if (!value.trim()) newErrors[key] = true; // Mark field as error if empty
//     }
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) { // Proceed only if no errors
//       try {
//         const response = await fetch("http://localhost:5000/inquiry", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(inquiryData),
//         });
//         if (response.ok) {
//           alert("Inquiry submitted successfully");
//         } else {
//           alert("Error submitting inquiry");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Error submitting inquiry");
//       }
//     } else {
//       alert("Please fill in all required fields.");
//     }
//   };

//   return (
//     <div className="App">
//       <div className="enquiry-section">
//         <h2 className="desktop-only">Inquiry</h2>
//         <button className="mobile-only enquiry-btn" onClick={handleEnquiryClick}>
//           Enquire Now
//         </button>
//         {(showInquiryForm || isDesktop) && (
//           <div className="inquiry-form">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Trip Type</label>
//                 <select name="tripType" required className={errors.tripType ? 'error' : ''}>
//                   <option value="">Select Trip Type</option>
//                   <option>Airport Transfer</option>
//                   <option>Local</option>
//                   <option>Oneway</option>
//                   <option>Roundtrip</option>
//                   <option>Tour Package</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Choose Date</label>
//                 <input type="date" name="date" required className={errors.date ? 'error' : ''} />
//               </div>

//               <div className="form-group">
//                 <label>Car Type</label>
//                 <select name="carType" required className={errors.carType ? 'error' : ''}>
//                   <option value="">Select Car Type</option>
//                   <option>Swift</option>
//                   <option>Innova</option>
//                   <option>Ertiga</option>
//                   <option>Tempotraveller</option>
//                   <option>Tavera</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Pickup Location</label>
//                 <input type="text" name="pickupLocation" placeholder="Pickup Location" required className={errors.pickupLocation ? 'error' : ''} />
//               </div>

//               <div className="form-group">
//                 <label>Drop Location</label>
//                 <input type="text" name="dropLocation" placeholder="Drop Location" required className={errors.dropLocation ? 'error' : ''} />
//               </div>

//               <div className="form-group">
//                 <label>Full Name</label>
//                 <input type="text" name="fullName" placeholder="Full Name" required className={errors.fullName ? 'error' : ''} />
//               </div>

//               <div className="form-group">
//                 <label>Contact No.</label>
//                 <input type="text" name="contactNo" placeholder="Contact No." required className={errors.contactNo ? 'error' : ''} />
//               </div>

//               <div className="form-group">
//                 <label>Email Address</label>
//                 <input type="email" name="email" placeholder="Email Address" required className={errors.email ? 'error' : ''} />
//               </div>

//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         )}
//       </div>

//       <div className="book-section">
//         <h2 className="desktop-only">Book Now</h2>
//         <button className="mobile-only book-now-btn" onClick={handleBookNowClick}>
//           Book Now
//         </button>
//         {(showContactOptions || isDesktop) && (
//           <div className="contact-options">
//             <button className="call-us-btn">Call Us</button>
//             <button className="chat-us-btn">Chat Us</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import './App.css';

const App = () => {
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState(""); // New state for the confirmation message

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 769);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleEnquiryClick = () => {
    setShowInquiryForm(!showInquiryForm);
  };

  const handleBookNowClick = () => {
    setShowContactOptions(!showContactOptions);
  };
  const handleChatUs = () => {
    window.open("https://wa.me/+919993790005", "Hi! I want to Book a CAB");
  };
  
  const handleCallUs = () => {
    window.location.href = "tel:+919993790005";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inquiryData = Object.fromEntries(formData.entries());
  
    // Custom validation
    const newErrors = {};
    for (const [key, value] of formData.entries()) {
      if (!value.trim()) newErrors[key] = true;
    }
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) { // Proceed only if no errors
      try {
        const response = await fetch("http://localhost:5000/inquiry", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inquiryData),
        });
        if (response.ok) {
          setSubmissionMessage("Your query has been submitted. We will get back to you soon.");
          e.target.reset();  // Clear the form fields after successful submission
        } else {
          setSubmissionMessage("Error submitting your query. Please try again later.");
        }
      } catch (error) {
        console.error("Error:", error);
        setSubmissionMessage("Error submitting your query. Please try again later.");
      }
    } else {
      setSubmissionMessage("Please fill in all required fields."); // Display error if any field is empty
    }
  }; 
  

  return (
    <div className="App">
      <div className="enquiry-section">
        <h2 className="desktop-only">Inquiry</h2>
        <button className="mobile-only enquiry-btn" onClick={handleEnquiryClick}>
          Enquire Now
        </button>
        {(showInquiryForm || isDesktop) && (
          <div className="inquiry-form">
            {submissionMessage && <p className="submission-message">{submissionMessage}</p>} {/* Display the message */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Trip Type</label>
                <select name="tripType" required className={errors.tripType ? 'error' : ''}>
                  <option value="">Select Trip Type</option>
                  <option>Airport Transfer</option>
                  <option>Local</option>
                  <option>Oneway</option>
                  <option>Roundtrip</option>
                  <option>Tour Package</option>
                </select>
              </div>

              <div className="form-group">
                <label>Choose Date</label>
                <input type="date" name="date" required className={errors.date ? 'error' : ''} />
              </div>

              <div className="form-group">
                <label>Car Type</label>
                <select name="carType" required className={errors.carType ? 'error' : ''}>
                  <option value="">Select Car Type</option>
                  <option>Swift</option>
                  <option>Innova</option>
                  <option>Ertiga</option>
                  <option>Tempotraveller</option>
                  <option>Tavera</option>
                </select>
              </div>

              <div className="form-group">
                <label>Pickup Location</label>
                <input type="text" name="pickupLocation" placeholder="Pickup Location" required className={errors.pickupLocation ? 'error' : ''} />
              </div>

              <div className="form-group">
                <label>Drop Location</label>
                <input type="text" name="dropLocation" placeholder="Drop Location" required className={errors.dropLocation ? 'error' : ''} />
              </div>

              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="fullName" placeholder="Full Name" required className={errors.fullName ? 'error' : ''} />
              </div>

              <div className="form-group">
                <label>Contact No.</label>
                <input type="text" name="contactNo" placeholder="Contact No." required className={errors.contactNo ? 'error' : ''} />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Email Address" required className={errors.email ? 'error' : ''} />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>

      <div className="book-section">
        <h2 className="desktop-only">Book Now</h2>
        <button className="mobile-only book-now-btn" onClick={handleBookNowClick}>
          Book Now
        </button>
        {(showContactOptions || isDesktop) && (
          <div className="contact-options">
            <button className="call-us-btn" onClick={handleCallUs}>Call Us</button>
            <button className="chat-us-btn" onClick={handleChatUs}>Chat Us</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
