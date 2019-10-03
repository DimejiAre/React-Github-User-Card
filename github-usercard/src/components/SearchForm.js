import React from 'react';

class SearchForm extends React.Component {
    render() {
        return (
            <form>
                <input type='text' placeholder='search' />
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default SearchForm;