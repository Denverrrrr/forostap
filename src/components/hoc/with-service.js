import React from 'react';
import {ServiceConsumer} from '../service-context';

const withService = () => (Wrapped) => {
  return(props)=>{
    return (
      <ServiceConsumer>
        {
          (givebatService)=>{
            return(
              <Wrapped {...props} givebatService={givebatService}/>
            )
          }
        }
      </ServiceConsumer>
    );
  }
};

export default withService;