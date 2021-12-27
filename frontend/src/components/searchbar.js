import React, {Component} from 'react';
//const Component = React.Component; // same thing as {Component}
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: 'Search...'}; //constructs state 
    }
    //needs to return something to export method (for class components). needs to return jsx
    render(){
            return( 
                <div className = "search-bar">
                    <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} 
                    onClick = {event => this.setState({term: ''})}/> 
                    <button type="button"
                    onClick = { () => this.props.onSearchTermChange(this.state.term)}
                    >
                        Search
                    </button>
                 </div> // when setstate is called, it re renders the component, value = html document value, back end "state" is updated first
            );
            // onChange is a standard react event, if method we are passing is parameterized, put curly braces
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
}
export default SearchBar; //component js files only export one thing, make sure it exports the function 