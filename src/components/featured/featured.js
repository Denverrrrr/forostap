import React, {Component, Fragment} from 'react';
import FeaturedItems from '../featured-items';

import { connect } from 'react-redux';

import './featured.scss'

class FeaturedContainer extends Component {

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
                <FeaturedItems
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
              featuredItems.map((item, index) => {
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
              })
            }
            </div>

              <FeaturedItems
                item={featuredItems[featuredItems.length - 1]}
                key={featuredItems[featuredItems.length - 1].id}
                nameToStyles={(bigItemClass)}
              />
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