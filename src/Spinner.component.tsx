import * as React from "react";
import { SpinnerService } from './spinner.service';

export interface ISpinnerProps {
  name: string,
  spinnerService: SpinnerService
  group?: string,
  loadingImage?: string,
  show?: boolean,
}

export interface ISpinnerState {
  show: boolean
}

export class SpinnerComponent extends React.Component<ISpinnerProps, ISpinnerState> {

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
    this.state = {
      show: this.props.hasOwnProperty('show') ? this.props.show : false
    };

    this.props.spinnerService._register(this);
  }

  componentWillUnmount() {
    this.props.spinnerService._unregister(this);
  }

  render() {
    if (this.state.show) {
      const { loadingImage } = this.props;
      return (
        <div>
          { loadingImage && <img src={loadingImage} /> }
          { this.props.children }
        </div>
      );
    }
    return <div></div>;
  }
}