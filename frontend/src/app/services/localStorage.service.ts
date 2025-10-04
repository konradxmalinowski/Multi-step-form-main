import { Injectable } from "@angular/core";
import { Form, state } from "../types/form";
import { PropertiesNames } from "../enums/localStorage.enums";
import { billingTypes, planTypes } from "../enums/form.enums";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    private checkIfStateExists() {
        if (localStorage.getItem('formState')) return true;
        return false;
    }

    addToLocalStorage(formState: state) {
        localStorage.setItem('formState', JSON.stringify(formState));
    }

    getStateFromLocalStorage(): state {
        if (this.checkIfStateExists())
            return Number(localStorage.getItem('formState')) as state;
        return 1;
    }

    savePropertyToLocalStorage(propertyName: PropertiesNames, value: any) {
        localStorage.setItem(JSON.stringify(propertyName), value);
    }

    getPropertyFromLocalstorage(propertyName: PropertiesNames): any {
        const returnedValue = localStorage.getItem(JSON.stringify(propertyName));
        if (returnedValue) return returnedValue;
        return null;
    }

    init() {
        const defaultValues: Record<PropertiesNames | string, any> = {
            formState: 1,
            [PropertiesNames.name]: '',
            [PropertiesNames.email]: '',
            [PropertiesNames.phoneNumber]: '',
            [PropertiesNames.plan]: planTypes.arcade,
            [PropertiesNames.planType]: billingTypes.monthly,
            [PropertiesNames.onlineService]: false,
            [PropertiesNames.largerStorage]: false,
            [PropertiesNames.customizableProfile]: false
        };

        Object.entries(defaultValues).forEach(([key, value]) => {
            if (!localStorage.getItem(key))
                localStorage.setItem(key, JSON.stringify(value));

        });
    }

    getAllProperties(): Record<PropertiesNames | string, any> {
        const defaultValues: Record<PropertiesNames | string, any> = {
            formState: 1,
            [PropertiesNames.name]: this.getPropertyFromLocalstorage(PropertiesNames.name),
            [PropertiesNames.email]: this.getPropertyFromLocalstorage(PropertiesNames.email),
            [PropertiesNames.phoneNumber]: this.getPropertyFromLocalstorage(PropertiesNames.phoneNumber),
            [PropertiesNames.plan]: this.getPropertyFromLocalstorage(PropertiesNames.plan),
            [PropertiesNames.planType]: this.getPropertyFromLocalstorage(PropertiesNames.planType),
            [PropertiesNames.onlineService]: this.getPropertyFromLocalstorage(PropertiesNames.onlineService),
            [PropertiesNames.largerStorage]: this.getPropertyFromLocalstorage(PropertiesNames.largerStorage),
            [PropertiesNames.customizableProfile]: this.getPropertyFromLocalstorage(PropertiesNames.customizableProfile)
        };

        return defaultValues;
    }


    resetAllLocalStorageProperties() {
        const namesOfProperties: (string | PropertiesNames)[] = ['formState', PropertiesNames.customizableProfile, PropertiesNames.email, PropertiesNames.largerStorage, PropertiesNames.name, PropertiesNames.name, PropertiesNames.onlineService, PropertiesNames.phoneNumber, PropertiesNames.plan, PropertiesNames.planType];

        namesOfProperties.forEach((name: string | PropertiesNames) => {
            localStorage.removeItem(JSON.stringify(name));
        });
    }
}