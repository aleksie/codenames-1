import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Messages messages={this.props.messages}/>
        <div className="row">
        <div className="jumbotron">
          <div className="container">
            <h1>Hello, stranger!</h1>
            <p>...</p>
            <p><Link className="btn btn-primary btn-lg" to="/lobby" role="button">Go to the Lobby</Link></p>
          </div>
        </div>
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h3>Heading</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui.</p>
                <a href="#" role="button" className="btn btn-default">View details</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h3>Heading</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui.</p>
                <a href="#" role="button" className="btn btn-default">View details</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="panel">
              <div className="panel-body">
                <h3>Heading</h3>
                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
                  mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
                  mollis euismod. Donec sed odio dui.</p>
                <a href="#" role="button" className="btn btn-default">View details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);
