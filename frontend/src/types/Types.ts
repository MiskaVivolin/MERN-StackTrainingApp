import { ReactNode } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';

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
    setIsEditMode: SetBoolean
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

export interface FormContainerProps {
    prObject: DataItem,
    setPrObject: any,
    prObjectIsValid: {
        [key: string]: boolean
    }
    setPrObjectIsValid: any,
    setPrList: SetResultList
}

export interface PrListProps {
    list: DataItem[];
    setList: SetResultList; 
}

export interface EditItemProps { 
    editItem: DataItem;
    setEditItem: SetEditItem;
    useEditPr: (item: DataItem, setIsEditMode: SetBoolean) => void;
    setIsEditMode: SetBoolean;
    isEditMode: boolean;
    setPrList: any;
}

export type SetResultList = (data: DataItem[]) => void

export type SetEditItem = (data: DataItem) => void

export type SetPrObject = (data: any) => void

export type SetBoolean = (data: boolean) => void 

export interface ContextChildren {
    children: ReactNode;
}

export interface ResultListState {
    resultList: DataItem[];
    setResultList: SetResultList;
}

export interface ValidationFields {
    username: string;
    password: string;
};
  
export interface ValidationHookResult {
    validationFields: ValidationFields;
    validationErrors: ValidationFields;
    usernameIsValid: () => boolean;
    passwordIsValid: () => boolean;
    setValidationFields: React.Dispatch<React.SetStateAction<ValidationFields>>;
    setValidationErrors: React.Dispatch<React.SetStateAction<ValidationFields>>;
};

export type RootStackParamList = {
    HomeScreen: undefined;
    LoginScreen: undefined;
    SignupScreen: undefined;
};
  
export type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

export type LoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'LoginScreen'>;
};

export type SignupScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'SignupScreen'>;
};

export interface ApiResponse {
    message: string;
}

export interface PrevStateBooleanObj {
    name: boolean,
    date: boolean,
    lift: boolean,
    result: boolean
}