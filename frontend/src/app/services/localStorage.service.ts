import { Injectable } from '@angular/core';
import { Form, state } from '../types/form';
import { PropertiesNames } from '../enums/localStorage.enums';
import { billingTypes, planTypes } from '../enums/form.enums';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {
        this.init();
    }

    private init() {
        const defaultValues: Record<PropertiesNames | string, any> = {
            formState: 1,
            [PropertiesNames.name]: '',
            [PropertiesNames.email]: '',
            [PropertiesNames.phoneNumber]: '',
            [PropertiesNames.plan]: planTypes.arcade,
            [PropertiesNames.planType]: billingTypes.monthly,
            [PropertiesNames.onlineService]: false,
            [PropertiesNames.largerStorage]: false,
            [PropertiesNames.customizableProfile]: false,
        };

        Object.entries(defaultValues).forEach(([key, value]) => {
            if (!localStorage.getItem(key))
                localStorage.setItem(key, JSON.stringify(value));
        });
    }

    savePropertyToLocalStorage(propertyName: PropertiesNames | string, value: any) {
        localStorage.setItem(propertyName.toString(), JSON.stringify(value));
    }

    getPropertyFromLocalstorage(propertyName: PropertiesNames | string): any {
        const returnedValue = localStorage.getItem(propertyName.toString());

        if (returnedValue === null) return null;
        try {
            return JSON.parse(returnedValue);
        } catch {
            return returnedValue;
        }
    }

    getAllProperties(): Form {
        return {
            name: this.getPropertyFromLocalstorage(PropertiesNames.name) ?? '',
            email: this.getPropertyFromLocalstorage(PropertiesNames.email) ?? '',
            phoneNumber:
                this.getPropertyFromLocalstorage(PropertiesNames.phoneNumber) ?? '',
            planType:
                (this.getPropertyFromLocalstorage(
                    PropertiesNames.planType
                ) as billingTypes) ?? billingTypes.monthly,
            plan:
                (this.getPropertyFromLocalstorage(PropertiesNames.plan) as planTypes) ??
                planTypes.arcade,
            onlineService:
                this.getPropertyFromLocalstorage(PropertiesNames.onlineService) ??
                false,
            largerStorage:
                this.getPropertyFromLocalstorage(PropertiesNames.largerStorage) ??
                false,
            customizableProfile:
                this.getPropertyFromLocalstorage(PropertiesNames.customizableProfile) ??
                false,
        };
    }

    resetAllLocalStorageProperties() {
        const namesOfProperties: (string | PropertiesNames)[] = [
            'formState',
            PropertiesNames.customizableProfile,
            PropertiesNames.email,
            PropertiesNames.largerStorage,
            PropertiesNames.name,
            PropertiesNames.name,
            PropertiesNames.onlineService,
            PropertiesNames.phoneNumber,
            PropertiesNames.plan,
            PropertiesNames.planType,
        ];

        namesOfProperties.forEach((name: string | PropertiesNames) => {
            localStorage.removeItem(name as string);
        });
    }
}
