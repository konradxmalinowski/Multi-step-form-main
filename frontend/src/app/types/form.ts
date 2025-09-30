export type Form = {
    id?: number,
    name: string,
    email: string,
    phoneNumber: string,
    plan: string;
    planType: string,
    onlineService: boolean,
    largerStorage: boolean,
    customizableProfile: boolean
};

export type ResponseForm = {
    id: number,
    name: string
};