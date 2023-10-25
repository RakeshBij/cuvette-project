import React, { useState } from "react";
import logo from "../../assets/html.svg";

const Hypertext = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValues, setInputValues] = useState({
    rank: 12890,
    percentile: 7,
    currentScore: 37,
  });

  const handleInputChange = (e) => {
    // Update the inputValues state based on input changes
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const handleSave = () => {
    // Log the input values to the console
    console.log("Input Values:", inputValues);
    // Close the modal
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      <span className="basic-border p-30 m-tb-15 m-r-30 w-700">
        <div className="flex gap-15">
          <img src={logo} alt="HTML logo" />
          <span className="flex h-end">
            <div className="flex flex-col gap-8">
              <div className="bold f-16 letter-space-secondary html-head">
                Hypertext Markup Language
              </div>
              <div className="f-12 letter-space-four secondary-color html-para">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </div>
            </div>
            <button className="btn update-btn" onClick={openModal}>
              Update
            </button>
          </span>
        </div>
      </span>

      {showModal && (
        <div className="modal-background" onClick={handleModalClick}>
          <div className="modal-content">
            {/* <span className="close-button" onClick={closeModal}>
              &times;
            </span> */}

            <div className="flex h-end v-center modal-head-container ">
              <div className="modal-heading">Update Scores</div>
              <div>
                <img src={logo} alt="HTML logo" />
              </div>
            </div>

            <div className="modal-content-container">
              <div className="flex v-center h-end">
                <div>
                  <span className="white model-nums">1</span>
                  <span className="secondary-color f-18 letter-space-secondary">
                    Update your <span className="bold">rank</span>
                  </span>
                </div>
                <input
                  type="text"
                  name="rank"
                  value={inputValues.rank}
                  className="custom-input"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex v-center h-end">
                <div>
                  <span className="white model-nums">2</span>
                  <span className="secondary-color f-18 letter-space-secondary">
                    Update your
                    <span className="bold"> percentile</span>
                  </span>
                </div>
                <input
                  type="text"
                  name="percentile"
                  value={inputValues.percentile}
                  className="custom-input"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex v-center h-end">
                <div>
                  <span className="white model-nums">3</span>
                  <span className="secondary-color f-18 letter-space-secondary">
                    Update your{" "}
                    <span className="bold">current score (out of 15)</span>
                  </span>
                </div>
                <input
                  type="text"
                  name="currentScore"
                  value={inputValues.currentScore}
                  className="custom-input"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <div className="modal-btn-container">
                <button className="btn cancel-btn" onClick={closeModal}>
                  Cancel
                </button>
                <button className="btn save-btn" onClick={handleSave}>
                  <span>Save</span>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33325 8.28415H12.6666"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 3.61751L12.6667 8.28417L8 12.9508"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hypertext;
