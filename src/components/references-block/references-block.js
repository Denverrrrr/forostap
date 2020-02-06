import React, { Component } from "react";

import {connect} from 'react-redux'; 

import ReferencesBlockNavbar from '../references-block-navbar';
import ReferencesItem from '../references-item';
import {withService} from '../hoc';

import { fetchReferencesItems } from "../../actions";

import './references-block.scss';

class ReferencesBlock extends Component {

  componentDidMount(){
    this.props.fetchReferencesItems();
  }

  render() {
    const { items /* loading, error */ } = this.props;
    return (
      <div className="references-block-wrapper">
        <ReferencesBlockNavbar />
        <div className="references-items-container">
          {items.map(item => {
            return <ReferencesItem item={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({referencesFilter,loading, error, referencesFilterCriterion})=>{
  return {
    test:referencesFilterCriterion,
    items: referencesFilter,
    loading,
    error,
  };
};

const mapDispatchToProps = (
  dispatch,
  {givebatService}, 
) => {
  return {
    fetchReferencesItems: fetchReferencesItems(givebatService, dispatch),
  };
};

export default withService()(connect(mapStateToProps, mapDispatchToProps)(ReferencesBlock));