import React, {Component} from 'react';

class AddCharacter extends Component {
    constructor(props) {
        super(props);
        this.character = {
            name: 'Sivraj',
            job: 'Bootcamper'
        }

        this.state = this.character;
    }

    handleChange = event => {
        const {ename, evalue} = event.target;
        this.setState({
            [ename]: evalue
        })
    }

    addCharacter = (event) => {
        event.preventDefault();
        this.props.addCharacter(this.state);
        //this.setState(this.character);
    }

    render() {
        const {name, job} = this.state;
        return (
        <form onSubmit={this.addCharacter}>
            <label for="name">Name</label>
            <input
                type = "text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}/>
            <label for="job">Job</label>
            <input
                type = "text"
                name="job"
                id="job"
                value={job}
                onChange={this.handleChange}/>
            <button type="submit">Add Character</button>
        </form>
        )
    }
}

export default AddCharacter;