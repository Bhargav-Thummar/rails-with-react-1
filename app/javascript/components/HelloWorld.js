import React from "react"
import PropTypes from "prop-types"

class HelloWorld extends React.Component {
  debugger
  render () {
    return (
      <h1 className='text-center'>
        Greeting: {this.props.greeting}
      </h1>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld;
