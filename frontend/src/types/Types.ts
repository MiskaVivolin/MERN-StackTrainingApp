import { ReactNode } from 'react'

export interface DataItem {
    readonly _id: number;
    name: string;
    date: string;
    lift: string;
    result: string;
}

export interface PrFields {
    name: string;
    date: string;
    lift: string;
    result: string;
}

export interface ResponseData extends DataItem {
    map(arg0: (item: DataItem) => { name: string; date: string; lift: string; result: string; }): DataItem[];
    message: string;
}

export interface PrListProps {
    list: DataItem[]
    setIsEditMode: SetIsEditMode
    setEditItem: SetEditItem
}

export interface InputContainerProps {
    header: string,
    value: string,
    object: PrFields,
    setObject: any,
    objectIsValid: {
        [key: string]: boolean
    }
}

export interface PrListProps {
    list: DataItem[];
    setList: SetResultList; 
}
export interface EditItemProps { 
    editItem: DataItem;
    setEditItem: SetEditItem;
    useEditPr: (item: DataItem, setIsEditMode: SetIsEditMode) => void;
    setIsEditMode: SetIsEditMode; 
}

export type SetResultList = (data: DataItem[]) => void

export type SetEditItem = (data: DataItem) => void

export type SetPrObject = (data: PrFields) => void

export type SetIsEditMode = (data: boolean) => void 

export type ContextChildren = {
    children: ReactNode;
}

export type ResultListState = {
    resultList: DataItem[];
    setResultList: SetResultList;
}


