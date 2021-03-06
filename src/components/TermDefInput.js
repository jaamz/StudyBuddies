import React, { Component } from 'react';


class TermDefInput extends Component {
    onChangeOne = e => {
        this.props.change("term", this.props.index, e.target.value);
    }

    oneChangeTwo = e => {
        this.props.change("definition", this.props.index, e.target.value);
    }

    render() {
        return (
            <div>
                <div className="field level create-card-form">
                <button onClick={(event) => {this.props.deleteClicked(event, this.props.index)}} className='button button-border'>X</button>
                    <div className="level-item">
                        <input className="input button-border term-input" type="text" placeholder="Term"
                            value={this.props.card.term} onChange={this.onChangeOne} />
                    </div>
                    <div className="level-item">
                        <input className="input button-border term-input" type="text" placeholder="Definition"
                            value={this.props.card.definition} onChange={this.oneChangeTwo} />
                    </div>
                </div>
            </div>
        );
    }
}

TermDefInput.propTypes = {

};

export default TermDefInput;