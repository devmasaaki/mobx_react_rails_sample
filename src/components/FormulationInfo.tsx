import * as React from 'react';
import {observer} from 'mobx-react';
import ReactSimpleRange from 'react-simple-range';

@observer
class FormulationInfo extends React.Component<{formState}, {}> {

    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }

    render() {
        const {name, address, birthday} = this.props.formState.patient_info;

        return (
          <div id="formulation-Info">
              <div className="form-input-row">
                  <div className="border-bottom form-input-row">
                      <div className="form-input-row form-input-label">
                          <b>Formulation Name</b>
                      </div>
                      <select>
                      </select>
                      
                  </div>
              </div>

              <div className="form-input-row">
                  <p className="form-input-label">Address asdf asdf asdf</p>
                  <div className="percentage_slider">
                    <ReactSimpleRange sliderSize={8}/>
                  </div>
              </div>

        </div>
        );
    }

};

export default FormulationInfo;
