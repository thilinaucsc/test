/**
 * Created by thilina on 8/31/17.
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

//import css
import '../../styles/DivField.less'

class DivField extends Component {

    constructor(props) {
        super(props);
    }

    render() {
            return (
                <div className="panelDiv-component" style={{display:this.props.display}}>
                    <div className="panel-field-content">
                        <TextField
                            floatingLabelText={this.props.heading}
                            type={this.props.inputType}
                            value={this.props.value}
                            onChnage={this.props._change}
                        />
                       {/* <input  defaultValue className="form-control"></input>*/}
                    </div>
                </div>
            );
        }
}

export default DivField;
