var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React. I have built this
        for the React Web App Dev Course
      </p>
      <p>
        Here are some of the tools I used:
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the
            Javascript Framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used
            Open Weather Map to search for weather data by city name.
          </li>
        </ul>
      </p>
    </div>
  )
};

module.exports = About;
