import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = "formData";

  return <div>Create Profile</div>;
};

CreateProfile.propTypes = {};

export default connect()(CreateProfile);
