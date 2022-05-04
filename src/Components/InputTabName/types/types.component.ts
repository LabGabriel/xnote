import { ChangeEvent, MouseEventHandler } from "react";

export interface IInputTabName {
    onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
    onClickClose?: (e?: MouseEventHandler<HTMLButtonElement> | any) => void;
    onClickDelete?: (e?: MouseEventHandler<HTMLButtonElement> | any) => void;
}