import React from 'react';
import "./searchForm.css";
import DataTileList from '../DataTileList/dataTileList';

var sfStatus = React.createRef();
var sfReuse = React.createRef();
var sfType = React.createRef();

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            status: "noSelect",
            reuse: "noSelect",
            type: "noSelect",
            apiData: [],
            newCount: 5
        }
    }

    componentDidMount() {
        this.fetchData();

    }

    async fetchData(url = "https://api.spacexdata.com/v3/capsules") {
        const response = await fetch(url);
        const jsonData = await response.json();
        this.setState({
            apiData: jsonData
        });
    }

    async getUserData() {
        this.setState({
            status: sfStatus.current.value,
            reuse: sfReuse.current.value,
            type: sfType.current.value
        });
    }

    async displayResults() {
        await this.getUserData();
        var url = "https://api.spacexdata.com/v3/capsules?reuse_count=" + this.state.reuse + "&type=" +
            this.state.type.toString() + "&status=" + this.state.status;
        console.log(url);
        await this.fetchData(url);
    }

    render() {
        return (
            <>
                <div className="searchForm">
                    <div className="sfTitle">Search Form</div>
                    <div className="sfFilterContainer">

                        <div className='sfFilter'>
                            <span>Capsule Status</span>
                            <select name="status" ref={sfStatus}>
                                <option value="">No Select</option>
                                <option value="active">Active</option>
                                <option value="destroyed">Destroyed</option>
                                <option value="retired">Retired</option>
                                <option value="unknown">Unknown</option>
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
                            onClick={() => this.displayResults()}>Search</button>
                    </div>
                </div>

                <div className='dataTileContainer'>
                    <DataTileList data={this.state.apiData} />
                </div>
            </>
        );
    }
}

export default SearchForm;