import React from "react";

import '../team.css';

class ViewTeamProfile extends React.Component {
    render() {
        return(
            <div className="ui container">
                <div className="ui grid">
                    <div className="two column row">
                        <div className="six wide column">
                            <i className="users huge icon"></i>
                            <span className="user-dname">&nbsp;&nbsp;&nbsp;&nbsp;<b>{this.props.team.teamName}</b></span>
                        </div>
                        <div className="seven wide column">
                            <div className="ui card">
                                <div className="content">
                                    <div className="center aligned header">About {this.props.team.teamName}</div>
                                        <div className="center aligned description">
                                        <p>{this.props.team.about}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="three wide column" id="flag">

                        </div>
                    </div>
                    <div className="row">
                        <div className="column">

                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default ViewTeamProfile