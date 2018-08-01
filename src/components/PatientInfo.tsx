import * as React from 'react';

import {observer} from 'mobx-react';
import DatePicker from 'react-datepicker';

@observer
class PatientInfo extends React.Component<{formState}, {}> {

    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }

    render() {
        const {name, address, birthday} = this.props.formState.patient_info;

        return (
          <div id="Patient-Info">
              <div className="form-input-row">
                  <p className="form-input-label">Name</p>
                  <input type="text" value={name} onChange={this.props.formState.setPatientName}/>
              </div>

              <div className="form-input-row">
                  <p className="form-input-label">Address</p>
                  <input type="text" value={address} onChange={this.props.formState.setPatientAddress}/>
              </div>

              <div className="form-input-row">
                  <p className="form-input-label">Date of birth</p>
                  <DatePicker
                    selected={birthday}
                    onChange={this.props.formState.setPatientBirthday} readOnly/>
              </div>
        </div>
        );
    }

};

export default PatientInfo;
