import React, { Component } from 'react';
import Spinner from '../Spinner';

const withData = View =>
  class extends Component {
    state = {
      data: null,
      loading: false,
      error: false
    };

    componentDidMount() {
      const { getData } = this.props;
      getData().then(data => {
        this.setState({
          data
        });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return <View {...this.props} data={data} />;
    }
  };

export default withData;
