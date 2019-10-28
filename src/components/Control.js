import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Search from './Search';
import Sort from './Sort';
class Control extends React.Component {
    render() {
        return (
            <div className="row mb-15 mt-15">
                <Search />
                <Sort />
            </div>
        );
    }
}

export default Control;
