import React, {Component} from 'react'
import './search.css'

class Search extends Component {
    render (){
        return (
            <div className="search">
                <input placeholder="Search over 1,000,000 recipes..."/>
                <button onClick={this.props.search}>SEARCH</button>
            </div>
        )
    }
}
export default Search