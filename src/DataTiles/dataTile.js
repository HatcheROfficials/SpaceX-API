import React from "react";
import "./dataTile.css";

class DataTile extends React.Component {
    render() {
        const {capsule_serial,capsule_id,status} = this.props.data;
        // {console.log(this.props.data)}
        return (
            <>
                <div className="tile">
                    <p>{this.props.data.capsule_serial}</p>
                    <p>{this.props.data.capsule_id}</p>
                    <p>{this.props.data.status}</p>
                </div>
            </>
        );
    }
}

export default DataTile; 