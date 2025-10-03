import { billingTypes, planTypes } from "../enums/form.enums";

export type Form = {
    id?: number,
    name: string,
    email: string,
    phoneNumber: string,
    plan: planTypes;
    planType: billingTypes,
    onlineService: boolean,
    largerStorage: boolean,
    customizableProfile: boolean
};

export type ResponseForm = {
    id: number,
    name: string
};