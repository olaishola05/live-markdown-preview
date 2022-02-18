import React, { Component } from 'react';
import { Remarkable } from 'remarkable';
import Input from './Input';
import Output from './Output';

export class Markdown extends Component {
  constructor(props) {
    super(props);

    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = JSON.parse(localStorage.getItem('notes'));
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleChange(e) {
    this.setState({ note: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.note) };
  }

  componentDidMount() {
    const temp = JSON.stringify(this.state);
    localStorage.setItem('notes', temp);
  }

  render() {
    console.log(this.state);
    return (
      <div className="markdownContainer">
        <Input
          handleChange={this.handleChange}
          currentValue={this.state.note}
          handleTitle={this.handleTitle}
          value="value"
        />
        <Output dangerouslySetInnerHTML={this.getRawMarkup()} />
      </div>
    );
  }
}

export default Markdown;
