import React, { Component } from "react";

class Field extends Component {
    render() {
        switch(this.props.fieldType) {
            default:
                return null;
            case 'input':
                return <InputField {...this.props} />;
            case 'textarea':
                return <TextAreaField {...this.props} />;
        }
    }
}

class InputField extends Component {
    render () {
        return (
            <div className="form-group">
                <input
                    className="form-control"
                    id={this.props.name}
                    type={this.props.inputType}
                    placeholder={this.props.placeholder}
                    // data-sb-validations={Object.keys(this.props.validations).join()}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors) &&
                        <span>{`${this.props.errors}`}</span>
                    }
                </p>
                {/* {
                    Object.entries(this.props.validations).map((item, index) => {
                        return(
                        <div className="invalid-feedback" key={index} data-sb-feedback={`${this.props.name}:${item[0]}`}>
                            {item[1]}
                        </div>
                    )})
                } */}
            </div>
        );
    }
}

class TextAreaField extends Component {
    render () {
        return (
            <div className="form-group form-group-textarea mb-md-0">
                <textarea
                    className="form-control"
                    id={this.props.name}
                    placeholder={this.props.placeholder}
                    // data-sb-validations={Object.keys(this.props.validations).join()}
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors) &&
                        <span>{`${this.props.errors}`}</span>
                    }
                </p>
                {/* {
                    Object.entries(this.props.validations).map((item, index) => {
                        return(
                        <div className="invalid-feedback" key={index} data-sb-feedback={`${this.props.name}:${item[0]}`}>
                            {item[1]}
                        </div>
                    )})
                } */}
            </div>
        );
    }
}

export default Field;

