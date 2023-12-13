"use strict";

import powerbi from "powerbi-visuals-api";
import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import "./../style/visual.less";

import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import { VisualFormattingSettingsModel } from "./settings";

export class Visual implements IVisual {
    private target: HTMLElement;
    private formattingSettings: VisualFormattingSettingsModel;
    private formattingSettingsService: FormattingSettingsService;

    constructor(options: VisualConstructorOptions) {
        console.log('Visual constructor', options);
        this.formattingSettingsService = new FormattingSettingsService();
        this.target = options.element;
    }

    private isFlipped: boolean = false;

    public update(options: VisualUpdateOptions) {
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, options.dataViews);
    
        console.log('Visual update', options);
    
        this.target.innerHTML = "";
    
        if (!options.dataViews || !options.dataViews[0]) {
            console.error('No valid data view found.');
            console.log('DataViews:', options.dataViews);
            return;
        }
    
        // Check for the existence of a categories array in the categorical data view
        if (!options.dataViews[0].categorical || !options.dataViews[0].categorical.categories) {
            console.error('No valid categories found in the categorical data view.');
            console.log('DataViews:', options.dataViews);
            return;
        }
    
        // Create a container div for the scrollable set of divs
        let containerDiv = document.createElement('div');
        containerDiv.className = 'scrollable-container';
    
        // Assuming there are at least two categories: 'report number' and 'INCIDENT CITY'
        if (options.dataViews[0].categorical.categories.length >= 3) {
            for (let i = 0; i < options.dataViews[0].categorical.categories[0].values.length; i++) {
                let div = document.createElement('div');
                div.className = 'item';
    
                let reportNumberValue = options.dataViews[0].categorical.categories[0].values[i];
                if (reportNumberValue !== null && reportNumberValue !== undefined) {
                    reportNumberValue = reportNumberValue.toString();
                    div.innerText = `Attributes for Incident: ${reportNumberValue}`;
                } else {
                    div.innerText = 'Attributes for Incident: N/A';
                }    

                let cityValue = options.dataViews[0].categorical.categories[1].values[i].toString();
                let cityDiv = document.createElement('div');
                cityDiv.innerText = `Incident City: ${cityValue}`;
                div.appendChild(cityDiv);

                let spillageResultValue = options.dataViews[0].categorical.categories[2].values[i].toString();

                // Create image element based on the "Spillage Result Ind" value
                let imageElement = document.createElement('img');
                if (spillageResultValue.toLowerCase() === 'yes') {
                    imageElement.src = 'data:image/png;base64,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';
                    imageElement.classList.add('spillage-yes'); // Add CSS class for 'yes'
                } else {
                    imageElement.src = 'data:image/png;base64,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';
                    imageElement.classList.add('spillage-no');  // Add CSS class for 'no'
                }
    
                // Append image element to the div
                div.appendChild(imageElement);

                containerDiv.appendChild(div);
            }
        }
        this.target.appendChild(containerDiv);
    }

    public getFormattingModel(): powerbi.visuals.FormattingModel {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }

    private getColumnIndex(dataView: powerbi.DataView, columnName: string): number {
        let columns = dataView.table.columns;
        for (let i = 0; i < columns.length; i++) {
            if (columns[i].displayName === columnName) {
                return i;
            }
        }
        return -1;
    }
}
