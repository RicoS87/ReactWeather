var React = require('react');

var WeatherForm = React.createClass({
  // getDefaultProps: function() {
  //   return {
  //     errorMessage: 'Error'
  //   }
  // },
  onFormSubmit: function (e) {
    e.preventDefault();
    var location = this.refs.location.value;
    var errorMessage = this.props.errorMessage;
    if(location.length > 0)
    {
      this.refs.location.value = '';
      this.props.onSearch(location);
    } else {
      // errorMessage = 'Location cannot be empty.';
    }

  },
  render: function() {
    // function renderError () {
    //   if(typeof errorMessage === 'string') {
    //     return (
    //       <ErrorModal message={errorMessage}/>
    //     )
    //   }
    // }
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search weather by city" />
          <button className="button expanded hollow">Get Weather</button>
          {/* {renderError()} */}
        </form>

      </div>
    );
  }
});

module.exports = WeatherForm;
