import React from 'react';

import './references-block-navbar.scss';
import { connect } from 'react-redux';

import {referencesFilter} from '../../actions';

const ReferencesBlockNavbar = ({ criterion, filter, toFilter }) => {
  const filterButtons = [
    { name: "news", label: "News" },
    { name: "fun", label: "Fun" },
    { name: "gaming", label: "Gaming" },
    { name: "tech", label: "Tech" },
    { name: "video", label: "Video" },
    { name: "useful", label: "Useful" }
  ];

  const button = filterButtons.map(({ name, label }) => {
    const isActive = criterion === name;
    const clazz = isActive ? "btn-main" : "btn-secondary";

    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => {
          console.log(toFilter);
          console.log(filter);
          console.log(criterion);
          return toFilter(name);
        }}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="navbarWrapper">
      <div className="navbar">{button}</div>
    </div>
  );
};

const mapStateToProps = ({ referencesFiltered, referencesFilterCriterion }) => {
  return {
    filter: referencesFilter,
    criterion: referencesFilterCriterion
  };
};

const mapDispachToProps = {
  toFilter: referencesFilter,
} 

export default connect(
  mapStateToProps,
  mapDispachToProps
)(ReferencesBlockNavbar);