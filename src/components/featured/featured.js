import React, {Component, Fragment} from 'react';
import SmallFeaturedItem from '../small-featured-item';

import { connect } from 'react-redux';

import './featured.scss'

class Featured extends Component {

  render() {
    const {featuredItems} = this.props;
    const smallItemsClass = 'small';
    const bigItemClass = 'big';


    const test = () => {
      
      if(featuredItems.length % 2 === 0){
        return (
          <div className="small-items-wrapper">
          {
            featuredItems.map((item)=>{
              return (
                <SmallFeaturedItem
                  item={item}
                  key={item.id}
                  nameToStyles={smallItemsClass}
                />
              );
            })
          }
          </div>
        )
      }else{
        return (
          <Fragment>
            <div className="small-items-wrapper">
              {
              featuredItems.map(item => {
                if (featuredItems.indexOf(item) === featuredItems.length - 1) {
                  return null;
                }

                return (
                  <SmallFeaturedItem
                    item={item}
                    key={item.id}
                    nameToStyles={smallItemsClass}
                  />
                );
              })
            }
            </div>

            <div>
              <SmallFeaturedItem
                item={featuredItems[featuredItems.length - 1]}
                key={featuredItems[featuredItems.length - 1].id}
                nameToStyles={(bigItemClass)}
              />
            </div>
          </Fragment>
        );
      }
    };


    return (
      <div className="featured-container">
        <span className="title">Featured</span>
        {test()}
      </div>
    );
  }
};

const mapStateToProps = ({ featuredItems }) => {
  return {
    featuredItems,
  };
};

export default connect(mapStateToProps, )(Featured);