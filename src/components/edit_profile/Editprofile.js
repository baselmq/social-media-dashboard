import React, { useState, useEffect } from "react";
export default function EditProfile({ userData, index }) {
  const [showInitialPopup, setShowInitialPopup] = useState(false);
  const [showSettingPopup, setShowSettingPopup] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState(null);
  const [firstName, setFirstName] = useState(userData[index].firstName);
  const [lastName, setLastName] = useState(userData[index].lastName);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [location, setLocation] = useState(userData[index].location);
  const [email, setEmail] = useState(userData[index].email);
  const [phone, setPhone] = useState(userData[index].phone);

  const openInitialPopup = () => {
    setShowInitialPopup(true);
  };

  const closeInitialPopup = () => {
    setShowInitialPopup(false);
  };

  const openSettingPopup = (setting) => {
    setSelectedSetting(setting);
    if (setting === "Email") {
      setEmail(userData[index].email); // Set initial email value
    }
    if (setting === "Phone") {
      setPhone(userData[index].phone); // Set initial phone value
    }
    setShowSettingPopup(true);
  };

  const closeSettingPopup = () => {
    setSelectedSetting(null);
    setShowSettingPopup(false);
    setUploadedImage(null);
  };

  useEffect(() => {
    setShowInitialPopup(false);
    setShowSettingPopup(false);
  }, []);

  const handleDivClick = () => {
    // Logic to handle div click
    // For simplicity, we are not making any modifications here
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);
  };

  const handleSaveChanges = () => {
    const modifiedData = [...userData];
    modifiedData[index].firstName = firstName;
    modifiedData[index].lastName = lastName;
    modifiedData[index].image = uploadedImage
      ? URL.createObjectURL(uploadedImage)
      : userData[index].image;
    modifiedData[index].location = location;
    modifiedData[index].email = email;
    modifiedData[index].phone = phone; // Update phone field
    // You can save the modifiedData to your backend or use it as per your requirement
  };

  return (
    <div>
      <button onClick={openInitialPopup}>click</button>

      {showInitialPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closeInitialPopup}>
              &times;
            </span>
            <div className="image-container">
              <img
                src={userData[index].image}
                alt=""
                className="profile-image"
              />
            </div>
            <div className="name-container">
              <div className="first-name">{userData[index].firstName}</div>
              <div className="last-name">{userData[index].lastName}</div>
            </div>
            <div className="settings">
              <div className="setting" onClick={() => openSettingPopup("Name")}>
                Name
              </div>
              <div
                className="setting"
                onClick={() => openSettingPopup("Profile picture")}
              >
                Profile picture
              </div>
              <div
                className="setting"
                onClick={() => openSettingPopup("Location")}
              >
                Location
              </div>
              <div
                className="setting"
                onClick={() => openSettingPopup("Email")}
              >
                Email
              </div>
              <div
                className="setting"
                onClick={() => openSettingPopup("Phone")}
              >
                Phone
              </div>
              <div className="popup-button-container">
                <button onClick={handleSaveChanges} className="button">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSettingPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closeSettingPopup}>
              &times;
            </span>

            <h1>{selectedSetting}</h1>
            {selectedSetting === "Name" && (
              <div onClick={handleDivClick} className="name-input-container">
                <form className="name-input-container">
                  <div>
                    <label htmlFor="firstName" className="firstName">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={handleFirstNameChange}
                      className="name-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="lastName">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={handleLastNameChange}
                      className="name-input"
                    />
                  </div>
                </form>
              </div>
            )}

            {selectedSetting === "Profile picture" && (
              <div>
                <div className="image-container">
                  {uploadedImage ? (
                    <img
                      src={URL.createObjectURL(uploadedImage)}
                      alt="Preview"
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <img
                      src={userData[index].image}
                      alt="Profile Picture"
                      className="image-profile"
                    />
                  )}
                </div>
                <label htmlFor="fileInput" className="upload-photo-text">
                  Upload New Photo
                </label>
                <input
                  type="file"
                  id="fileInput"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
              </div>
            )}

            {selectedSetting === "Location" && (
              <div>
                <label htmlFor="location" className="location"></label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="location-input"
                />
              </div>
            )}

            {selectedSetting === "Email" && (
              <div>
                <label htmlFor="email" className="email"></label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                />
              </div>
            )}

            {selectedSetting === "Phone" && (
              <div>
                <label htmlFor="phone" className="phone"></label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="phone-input"
                />
              </div>
            )}

            <div className="popup-button-container">
              <button onClick={handleSaveChanges} className="button">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
