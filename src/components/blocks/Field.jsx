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
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors) &&
                        <span>{this.props.errors}</span>
                    }
                </p>
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
                    name={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                />
                <p className="help-block text-danger">
                    {(this.props.touched && this.props.errors) &&
                        <span>{this.props.errors}</span>
                    }
                </p>
            </div>
        );
    }
}

export default Field;

