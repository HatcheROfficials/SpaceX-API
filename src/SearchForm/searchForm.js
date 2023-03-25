import React from 'react';
import "./searchForm.css";

var sfStatus = React.createRef();
var sfReuse = React.createRef();
var sfType = React.createRef();

function displayVal() {
    console.log(sfStatus.current.value);
    console.log(sfReuse.current.value);
    console.log(sfType.current.value);
}

function SearchForm() {
    return (
        <div className="searchForm">
            <div className="sfTitle">Search Form</div>
            <div className="sfFilterContainer">

                <div className='sfFilter'>
                    <span>Capsule Status</span>
                    <select name="status" ref={sfStatus}>
                        <option value="">No Select</option>
                        <option value="active">Active</option>
                        <option value="Feb">Destroyed</option>
                        <option value="Mar">Retired</option>
                        <option value="Apr">Unknown</option>
                    </select>
                </div>

                <div className='sfFilter'>
                    <span>Capsule Reuse Count</span>
                    <select name="reuse" ref={sfReuse}>
                        <option value="">No Select</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>

                <div className='sfFilter'>
                    <span>Capsule Type</span>
                    <select name="type" ref={sfType}>
                        <option value="">No Select</option>
                        <option value="Dragon 1.0">Dragon 1.0</option>
                        <option value="Dragon 1.1">Dragon 1.1</option>
                        <option value="Dragon 2.0">Dragon 2.0</option>
                    </select>
                </div>

                <button className="sfButton" type="button"
                    onClick={() => displayVal()}>Search</button>
            </div>
        </div>
    );
}

export default SearchForm;