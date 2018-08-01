import * as React from 'react';

import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import ReactSimpleRange from 'react-simple-range';

@observer
class FormulationInfo extends React.Component<{formState}, {}> {

    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }

    @observable vall = 0;

    handlerchange = (e) => {
    //    console.log(e);
    //    this.vall = e.value / 2;
    };

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
                            <option value="0">-- Please Select --</option>
                            {this.props.formState.formulation_info.map((object, i) => <option key={i} value={object.id}>{object.name}</option>)}
                      </select>

                  </div>
              </div>

              {this.props.formState.ingredient_info.map((object, i) => 
                <div className="form-input-row" key={i}>
                    <p className="form-input-label">{object.name}</p>
                    <div className="percentage_slider">
                    <ReactSimpleRange sliderSize={8} value={this.vall} label={true} onChange={this.handlerchange}/>
                    </div>
                </div>
              )}
              
        </div>
        );
    }

};

export default FormulationInfo;
