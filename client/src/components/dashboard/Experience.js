import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";

const Experience = ({ experience }) => {
  const experience = experience.map((exp) => (
    <th key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.form}</Moment> -{" "}
        {exp.to === null ? (
          " Now"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.form}</Moment>
        )}
      </td>
    </th>
  ));
  return (
    <th>
      <h2 className="my-2">Expereience Credentials</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
          </tr>
        </thead>
      </table>
    </th>
  );
};

Experience.propTypes = {};

export default Experience;
