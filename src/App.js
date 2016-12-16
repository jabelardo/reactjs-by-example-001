import React, {Component} from "react";
import "./App.css";
import "whatwg-fetch";
import Timeago from 'timeago.js';

class Heading extends Component {
  render() {
    return (
        <th>{this.props.name}</th>
    );
  }
}

class Headings extends Component {
  render() {
    const headings = this.props.headings.map(function (name, idx) {
      return (<Heading name={name} key={idx}/>);
    });
    return (<thead>
    <tr>{headings}</tr>
    </thead>);
  }
}

class Row extends Component {
  render() {
    const rowStyle = {backgroundColor: 'aliceblue'};
    return (
        <tr style={rowStyle}>
          <td>{this.props.change.when}</td>
          <td>{this.props.change.who}</td>
          <td>{this.props.change.description}</td>
        </tr>
    );
  }
}

class Rows extends Component {
  render() {
    const rows = this.props.changeSets.map(function (change, idx) {
      return (
          <Row change={change} key={idx}/>
      );
    });
    return (<tbody>{rows}</tbody>);
  }
}

class RecentChangesTable extends Component {
  render() {
    return (
        <div className="recentChangesTable">
          <h1>{this.props.title}</h1>
          <table className='headingStyle'>
            {this.props.children}
          </table>
        </div>
    );
  }
}

class App extends Component {
  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('http://openlibrary.org/recentchanges.json?limit=10')
        .then(function (response) {
          return response.json()
        })
        .then(function (json) {
          const changeSets = this.mapOpenLibraryDataToChangeSet(json);
          this.setState({changeSets: changeSets});
        }.bind(this));
  }

  mapOpenLibraryDataToChangeSet(data) {
    return data.map(function (change, index) {
      return {
        "when": new Timeago().format(change.timestamp),
        "who": change.author.key.replace('/people/', ''),
        "description": change.comment
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  constructor(props) {
    super(props);
    this.state = {
      changeSets: [],
      headings: ['Updated At', 'Author', 'Change']
    }
  }

  render() {
    console.log('render');

    return (
        <RecentChangesTable title={this.props.title}>
          <Headings headings={this.props.headings}/>
          <Rows changeSets={this.state.changeSets}/>
        </RecentChangesTable>
    );
  }
}

App.propTypes = {
  headings: React.PropTypes.array,
  changeSets: React.PropTypes.array
};

App.defaultProps = {
  changeSets: [],
  headings: ['When', 'Who', 'Description']
};

export default App;
