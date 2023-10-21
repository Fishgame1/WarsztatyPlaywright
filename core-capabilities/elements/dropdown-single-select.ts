import { expect } from '@playwright/test';
import playwrightObject from 'core-capabilities/engine/playwright-object';
import { BaseElement } from './base-element';

export class DropdownSelect extends BaseElement {

    constructor(public placeholder: string = '', selector: string) {
        super(selector);
    }

    async selectOption(value: string) {
        await this.element().selectOption(value);
    }

    async selectOptionByIndex(value: number) {
        await this.element().selectOption({ index: value });
    }

    async selectOptionByLabel(labelValue: string) {
        await this.element().selectOption({ label: labelValue });
    }

    async getSelectedOption() {
        return await this.element()
            .page()
            .$eval(this.selector, (o: HTMLSelectElement) =>
                o.options[o.options.selectedIndex].textContent?.trim()
            );
    }
}