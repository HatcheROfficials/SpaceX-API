import React from "react";
import DataTile from "../DataTiles/dataTile";
import "./dataTileList.css";

// Capsule Tile Container
class DataTileList extends React.Component {
    render() {
        const { loadMoreResults } = this.props;
        return (
            <>
                {/* Tile list container */}
                <div className="tileList">
                    {
                        this.props.data.map((capsule, index) =>
                            <DataTile key={index} data={capsule} />
                        )
                    }
                </div>
                {/* Footer */}
                <div className="tLoadMore">

                </div>
                {/* <div className="tLoadMore"
                    onClick={() => loadMoreResults()}>
                    {this.props.data.length>=10?"Load More Results ...":"These Are All The Results... Enjoy!"}
                </div> */}
            </>
        );
    }
}

export default DataTileList; 