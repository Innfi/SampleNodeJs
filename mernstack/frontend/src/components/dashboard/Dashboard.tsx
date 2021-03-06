import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';


interface DashboardProps {
    logoutUser: () => void,
    auth: object
};

/*
class Dashboard extends Component<DashboardProps> {
    static propTypes = {
        logoutUser: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired
    };

    onLogoutClick = (e: any) => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;

        return (
            <div style={{ height: "75vn" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Hey there,</b> { user.name.split(' ')[0] }
                            <p className="flow-text grey-text text-darken-1">
                                You are logged into a full-stack{" "} 
                                <span style={{ fontFamily: "monospace" }}>MERN</span>
                            </p>
                        </h4>
                        <button style={{
                            width: "150px", borderRadius: "3px", 
                            letterSpacing: "1.5px", marginTop: "1rem"
                        }} 
                        onClick={this.onLogoutClick} 
                        className="btn btn-large waves-effect waves-light hoverable 
                                    blue accent-3">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) =>({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
) (Dashboard);

*/