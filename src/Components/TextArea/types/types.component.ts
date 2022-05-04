import { TextareaHTMLAttributes } from "react";

export interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    dataId: string;
}
