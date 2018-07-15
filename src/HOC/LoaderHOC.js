import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoaderHOC = propName => WrappedComponent => {
  return class LoaderHOC extends React.Component {
    isEmpty(prop) {
      return (
        prop === null ||
        prop === undefined ||
        (prop.hasOwnProperty('length') && prop.length === 0) ||
        (prop.constructor === Object && Object.keys(prop).length === 0)
      );
    }
    render() {
      return this.isEmpty(this.props[propName]) ? (
        <Dimmer active inverted>
          <Loader inverted content="Loading" />
        </Dimmer>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default LoaderHOC;
