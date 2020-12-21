//import { render } from '@testing-library/react';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

// React 16 and above introduced a new lifecycle method equivalent to the try catch block.
// If any error occurs this lefecycle hook will run automatically.
componentDidCatch(error, info) {
  // setState will force the render method to run
  this.setState({hasError: true});
}

render() {
  if (this.state.hasError) {
    return <h1>Oooops. That is not good</h1>
  }

  // ErrorBoundary component is expected to sandwich a child component.
  // Here we can return the child component to be rendered.
  return this.props.children;
}
}

export default ErrorBoundary;