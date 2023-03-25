import React from "react";
import "./dataTile.css";

class DataTile extends React.Component {
    constructor() {
        super();
        this.state = {
            capData: {},
            show: false
        }
    }

    showLightbox = () => {
        this.state.show = !this.state.show;
        this.setState({
            show: this.state.show
        });

    }

    Lightbox = () => {
        console.log(this.state);
        return (
            <div className="lightbox">
                <p className="tHeading">{this.state.capData.type}</p>
                <hr />
                <p className="tStatus"><strong>Details:</strong> {this.state.capData.details?this.state.capData.details:"No Details Available"}</p>
                <p className="tStatus"><strong>Capsule Serial:</strong> {this.state.capData.capsule_serial}</p>
                <p className="tStatus"><strong>Capsule Id:</strong> {this.state.capData.capsule_id}</p>
                <p className="tStatus"><strong>Landings:</strong> {this.state.capData.landings}</p>
                <p className="tStatus"><strong>Status:</strong> {this.state.capData.status}</p>
                <p className="tStatus"><strong>Reuse Count:</strong> {this.state.capData.reuse_count}</p>
                <p className="tDetails">"Click Again To Remove Details"</p>
            </div>
        );
    }

    render() {
        const { capsule_serial, capsule_id, status, reuse } = this.props.data;
        this.state.capData = this.props.data;
        // {console.log(this.props.data)}
        return (
            <>
                <div className="tile"
                    onClick={this.showLightbox}>
                    <p className="tHeading">{this.props.data.type}</p>
                    <hr />
                    <p className="tDate"><span><strong>Launch Data</strong></span> &nbsp; {this.props.data.original_launch ? this.props.data.original_launch.substring(0, 10) : "unknown"}</p>
                    <p className="tStatus"><strong>Status:</strong> <span>{this.props.data.status}</span></p>
                    <p className="tStatus"><strong>Reuse Count:</strong> {this.props.data.reuse_count}</p>
                    {this.state.show ? <this.Lightbox 
                                        /> : null}
                </div>
            </>
        );
    }
}

export default DataTile; 