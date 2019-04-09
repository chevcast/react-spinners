import * as React from "react";
import { SpinnerService, spinnerService } from './spinner.service';

export interface ISpinnerProps {
  name: string,
  spinnerService?: SpinnerService
  group?: string,
  loadingImage?: string,
  show?: boolean,
  style?: object
}

export interface ISpinnerState {
  show: boolean
}

export class SpinnerComponent extends React.Component<ISpinnerProps, ISpinnerState> {

  private spinnerService = spinnerService;

  set show(show: boolean) {
    this.setState({ show });
  }

  get show() {
    return this.state.show;
  }

  get name() {
    return this.props.name;
  }

  get group() {
    return this.props.group;
  }

  componentWillMount() {
    this.setState({
      show: this.props.hasOwnProperty('show') ? this.props.show : false
    });

    if (this.props.hasOwnProperty('spinnerService')) {
      this.spinnerService = this.props.spinnerService;
    }

    this.spinnerService._register(this);
  }

  componentWillUnmount() {
    this.spinnerService._unregister(this);
  }

  render() {
    if (this.state.show) {
      const { loadingImage } = this.props;
      return (
        <div style={{ display: 'inline-block' }}>
          { loadingImage && <img src={loadingImage} /> }
          { this.props.children }
        </div>
      );
    }
    return (<div style={{ display: 'inline-block' }}></div>);
  }
}