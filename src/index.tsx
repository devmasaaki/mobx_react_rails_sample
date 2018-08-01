import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import * as moment from 'moment';
import axios from 'axios';

import PatientInfo from './components/PatientInfo'
import FormulationInfo from './components/FormulationInfo'

class FormState {
    @observable patient_info = {
        name: "",
        address: "",
        birthday: moment()
    };

    @observable formulation_info = [];
    @observable ingredient_info = [];
    @observable ingredient_per = {};

    constructor() {
        const self = this;

        axios.get('http://localhost:3000/get_all_formulations')
          .then(function (response) {
            self.formulation_info = response.data.slice();
          })
          .catch(function (error) {
            console.log(error);
        });

        axios.get('http://localhost:3000/get_all_ingredients')
          .then(function (response) {
            self.ingredient_info = response.data.slice();
          })
          .catch(function (error) {
            console.log(error);
        });
    }

    setPatientName = e => {
        this.patient_info.name = e.target.value;
    }

    setPatientAddress = e => {
        this.patient_info.address = e.target.value;
    }

    setPatientBirthday = date => {
        this.patient_info.birthday = date;
    }
}

class FormView extends React.Component<{formState: FormState}, {}> {

    render() {
        return (
            <div>
                <div className="App" id="formulation_form">
                    <form>
                        <div className="left-area">
                            <PatientInfo formState={this.props.formState} />
                            <button id="form-submit" >Submit</button>
                        </div>
                        <div className="right-area">
                            <FormulationInfo formState={this.props.formState} />
                        </div>
                    </form>
                </div>
                <DevTools />
            </div>
        );
     }
};

const formState = new FormState();
ReactDOM.render(<FormView formState={formState} />, document.getElementById('root'));
