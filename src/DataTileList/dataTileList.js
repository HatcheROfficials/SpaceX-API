import React from "react";
import DataTile from "../DataTiles/dataTile";
import "./dataTileList.css";

class DataTileList extends React.Component {
    render() {
        const { loadMoreResults } = this.props;
        return (
            <>
                <div className="tileList">
                    {
                        this.props.data.map((capsule, index) =>
                            <DataTile key={index} data={capsule} />
                        )
                    }
                </div>
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