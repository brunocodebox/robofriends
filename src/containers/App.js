import React, { Component} from 'react'; // Short hand to reference Component from React
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'; // This will import the font
import Scroll from '../components/Scroll'; // Scroll the robots so that the Search bar is always visible

// robots must be destructure because the file ./robots may have multiple exports. 
// It is not a single export like ./Card file. If there was another const variable
// called say 'cats', then it will have to be dereferenced as well like this: { robots, cats }
// import { robots } from './robots';

// Now like Flutter , React uses State to pass down information to children.
// A class must be defined to use the State 

// const App = () => {
//   return(
//     <div className='tc'>
//       <h1>RoboFriends</h1>
//       <SearchBox />
//       <CardList robots={robots}/>
//     </div>
//   );
// };


class App extends Component {
  // Make use of the constructor to use the State. The constructor is part of the
  // so called life cycle hooks of react. https://reactjs.org/docs/react-component.html

  // Also be aware that this sort of component with changing state is no 'pure' so they
  // reside in 'containers' folder.
  constructor() {
    // super must be called to be able to use this below
    super()
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  // Notice that arrow function is not used because componentDidMount is part of React
  componentDidMount() {
      // Now load the imported robots from the js file
      //this.setState({robots: robots});

      // Let's use canned users from json place holder
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
  }

  // Careful here !!! 
  // 'this' belongs to the input field that triggered the event, not the 'this' of the App.
  // To prevent this make sure to make the event a parameter of a function like so:
  // Change onSearchChange(event) to onSearchChange = (event) => {...}
  // onSearchChange(event) {
  onSearchChange = (event) => {
    // Just like Flutter, now update the state
    this.setState({searchfield: event.target.value});

    // Filter the robots with name included in the seach field. And later, move this function to the render() function
    // const filteredRobots = this.state.robots.filter((robot) => {
    //   return robot.name.toLowerCase().includes(this.state.searchfield);
    // });
  }

  // A class has a render function. The robots can now be accessed from the state
  // and not from the imported robots. The App can now change the value of the state
  // pass it down to the children.
  render() {

    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield);
    });

    return !robots.length ? 
      <h1>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
  }
}
export default App;

