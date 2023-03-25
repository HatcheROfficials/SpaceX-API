import React from "react";
import DataTile from "../DataTiles/dataTile";
import "./dataTileList.css";

class DataTileList extends React.Component {
    render() {
        // {console.log(this.props.data[1])}
        return (
            <>
                <div className="tileList">
                    {
                        this.props.data.map((capsule,index) =>
                            <DataTile key={index} data={capsule} />
                        )
                    }
                </div>
            </>
        );
    }
}

export default DataTileList; 