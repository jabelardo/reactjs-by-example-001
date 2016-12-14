import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Heading extends Component {
  render() {
    return (
        <th>{this.props.name}</th>
    );
  }
}

class Headings extends Component {
  render() {
    const headings = this.props.headings.map(function(name, idx) {
      return (<Heading name={name} key={idx} />);
    });
    return (<thead><tr>{headings}</tr></thead>);
  }
}

class Row extends Component {
  render() {
    const rowStyle = { backgroundColor: 'aliceblue' };
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
    const rows = this.props.changeSets.map(function(change, idx) {
      return (
          <Row change={change} key={idx}/>
      );
    });
    return (<tbody>{rows}</tbody>);
  }
}

class RecentChangesTable extends Component {
  render() {
    return (<table className='headingStyle'>{this.props.children}</table>);
  }
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>{this.props.title}</h1>
          <RecentChangesTable>
            <Headings headings={this.props.headings} />
            <Rows changeSets={this.props.changeSets} />
          </RecentChangesTable>
        </div>
    );
  }
}

export default App;
