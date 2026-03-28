import React from "react";

const Spinner = () => {
  return (
    <div className="text-center my-5">
      <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status"></div>
      <p className="mt-3">Loading latest news...</p>
    </div>
  );
};

export default Spinner;