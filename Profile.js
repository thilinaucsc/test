/**
 * Created by thilina on 8/31/17.
 */
import React, {Component} from 'react';
import {Ln} from '../enums/language';
import PanelDiv from '../components/independentComponents/DivField';
import UserApi from '../api/Users'
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const Data = require('../enums/data.json');

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            userType: JSON.parse(localStorage.getItem("UserToken")).userType,
            display: [],
            userData: {
                name:'',
                email:''
            }
        }

        this.updateUser = this.updateUser.bind(this);

    }

    componentWillMount() {

        this.setState({
            display: Data.profile.filed_display[this.state.userType],
            //userData: UserApi.getAgent(JSON.parse(localStorage.getItem("UserToken")).username)
         });

        UserApi.getAgent(JSON.parse(localStorage.getItem("UserToken")).username, (response) => {
            console.log('response : ', response);
            this.setState({userData : response});
        });
    }

    updateUser(e){
        e.preventDefault();
        console.log('clicked', e.name);
    }

    _Change(event, value){
        //update the value here
        console.log('aaaaa');
    }


    render() {

        console.log('userObject name : ', this.state.userData.name);
        if(!this.state.userData){
            return(<p>Loading.....</p>);
        }
        return (
            <div className="profile-content">
                <h2>{Ln.profile.heading}</h2>
                <form onSubmit={this.updateUser}>
                    <PanelDiv
                        heading='name'
                        inputType="text"
                        value={this.state.userData.name}
                        display={this.state.display[0]}
                    />
                    <PanelDiv
                        heading='email'
                        inputType="text"
                        value={this.state.userData.email}
                        display={this.state.display[1]}
                    />
                    <PanelDiv
                        heading='aaa1'
                        inputType="text"
                        value="a3"
                        display={this.state.display[2]}
                    />
                    <RaisedButton label={Ln.profile.submit} primary={true} type="submit" />
                </form>
            </div>
        );
    }
}

Profile.propTypes = {
};

export default Profile;
