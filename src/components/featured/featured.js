import React, {Component, Fragment} from 'react';
import FeaturedItems from '../featured-items';

import { connect } from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {withService} from '../hoc';

import {fetchFeaturedItems} from "../../actions";

import './featured.scss'


class FeaturedContainer extends Component {
  componentDidMount() {
    this.props.fetchFeaturedItems();
  }

  render() {
    const { featuredItems, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <div className="featured-container">
        <span className="title">Featured</span>
        <Featured featuredItems={featuredItems} />
      </div>
    );
  }
};

const Featured = ({ featuredItems }) => {
  const smallItemsClass = "small";
  const bigItemClass = "big";

  if (featuredItems.length % 2 === 0) {
    return (
      <div className="small-items-wrapper">
        {featuredItems.map(item => {
          return (
            <FeaturedItems
              item={item}
              key={item.id}
              nameToStyles={smallItemsClass}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <Fragment>
        <div className="small-items-wrapper">
          {featuredItems.map((item, index) => {
            if (index === featuredItems.length - 1) {
              return null;
            }

            return (
              <FeaturedItems
                item={item}
                key={item.id}
                nameToStyles={smallItemsClass}
              />
            );
          })}
        </div>
        <FeaturedItems
          item={featuredItems[featuredItems.length - 1]}
          key={featuredItems[featuredItems.length - 1].id}
          nameToStyles={bigItemClass}
        />
      </Fragment>
    );
  }
};
  
  

const mapStateToProps = ({ featuredItems, loading, error }) => {
  return {
    featuredItems,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { givebatService }) => {
  return {
    fetchFeaturedItems: fetchFeaturedItems(givebatService, dispatch)
  };
};

export default withService()(connect(
                            mapStateToProps,
                            mapDispatchToProps
                            )
                            (FeaturedContainer));