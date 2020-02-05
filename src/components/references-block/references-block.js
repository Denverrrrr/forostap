import React, { Fragment, Component } from "react";

import {connect} from 'react-redux'; 

import ReferencesBlockNavbar from '../references-block-navbar';
import ReferencesItem from '../references-item';
import {withService} from '../hoc';

import { fetchReferencesItems, referencesDidMount } from "../../actions";

import './references-block.scss';

class ReferencesBlock extends Component {

  componentDidMount(){
    this.props.fetchReferencesItems();
    this.props.toFilter();
  }

  render() {
    const { items /* loading, error */ } = this.props;
    return (
      <Fragment>
        <ReferencesBlockNavbar />
        <div className="references-items-container">
          {items.map(item => {
            return <ReferencesItem item={item} key={item.id} />;
          })}
        </div>
      </Fragment>
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
    toFilter: referencesDidMount
  };
};

export default withService()(connect(mapStateToProps, mapDispatchToProps)(ReferencesBlock));