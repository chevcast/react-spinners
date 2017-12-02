/// <reference types="react" />
import * as React from "react";
import { SpinnerService } from './spinner.service';
export interface ISpinnerProps {
    name: string;
    spinnerService?: SpinnerService;
    group?: string;
    loadingImage?: string;
    show?: boolean;
    style?: object;
}
export interface ISpinnerState {
    show: boolean;
}
export declare class SpinnerComponent extends React.Component<ISpinnerProps, ISpinnerState> {
    private spinnerService;
    show: boolean;
    readonly name: string;
    readonly group: string;
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
