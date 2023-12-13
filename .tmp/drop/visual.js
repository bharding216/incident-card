var incidentCard02E2F56F88BB4FCE98B627DBA9F48EC1_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ VisualFormattingSettingsModel)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */


var FormattingSettingsCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .Card */ .Zb;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .Model */ .Hn;
/**
 * Data Point Formatting Card
 */
class DataPointCardSettings extends FormattingSettingsCard {
    defaultColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "defaultColor",
        displayName: "Default color",
        value: { value: "" }
    });
    showAllDataPoints = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ToggleSwitch */ .Zh({
        name: "showAllDataPoints",
        displayName: "Show all",
        value: true
    });
    fill = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "fill",
        displayName: "Fill",
        value: { value: "" }
    });
    fillRule = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .ColorPicker */ .zH({
        name: "fillRule",
        displayName: "Color saturation",
        value: { value: "" }
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .NumUpDown */ .L_({
        name: "fontSize",
        displayName: "Text Size",
        value: 12
    });
    name = "dataPoint";
    displayName = "Data colors";
    slices = [this.defaultColor, this.showAllDataPoints, this.fill, this.fillRule, this.fontSize];
}
/**
* visual settings model class
*
*/
class VisualFormattingSettingsModel extends FormattingSettingsModel {
    // Create formatting settings model formatting cards
    dataPointCard = new DataPointCardSettings();
    cards = [this.dataPointCard];
}


/***/ }),

/***/ 546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(261);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(401);




class Visual {
    target;
    formattingSettings;
    formattingSettingsService;
    constructor(options) {
        console.log('Visual constructor', options);
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
        this.target = options.element;
    }
    isFlipped = false;
    update(options) {
        this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(_settings__WEBPACK_IMPORTED_MODULE_0__/* .VisualFormattingSettingsModel */ .E, options.dataViews);
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
        if (options.dataViews[0].categorical.categories.length >= 4) {
            for (let i = 0; i < options.dataViews[0].categorical.categories[0].values.length; i++) {
                let div = document.createElement('div');
                div.className = 'item';
                let reportNumberValue = options.dataViews[0].categorical.categories[0].values[i];
                if (reportNumberValue !== null && reportNumberValue !== undefined) {
                    reportNumberValue = reportNumberValue.toString();
                    div.innerText = `Attributes for Incident: ${reportNumberValue}`;
                }
                else {
                    div.innerText = 'Attributes for Incident: N/A';
                }
                let cityValue = options.dataViews[0].categorical.categories[1].values[i].toString();
                let cityDiv = document.createElement('div');
                cityDiv.innerText = `Incident City: ${cityValue}`;
                div.appendChild(cityDiv);
                // Create grid container
                const gridContainer = document.createElement('div');
                gridContainer.className = 'grid-container';
                // Create a 3x3 grid
                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        const gridItem = document.createElement('div');
                        gridItem.className = 'grid-item';
                        if (row === 0 && col === 0) {
                            // Create image element based on the "Spillage Result Ind" value
                            let imageElement = document.createElement('img');
                            let spillageResultValue = options.dataViews[0].categorical.categories[2].values[i].toString();
                            if (spillageResultValue.toLowerCase() === 'yes') {
                                imageElement.src = 'data:image/png;base64,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';
                                imageElement.classList.add('spillage-yes'); // Add CSS class for 'yes'
                            }
                            else {
                                imageElement.src = 'data:image/png;base64,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';
                                imageElement.classList.add('spillage-no'); // Add CSS class for 'no'
                            }
                            gridItem.appendChild(imageElement);
                        }
                        if (row === 0 && col === 1) {
                            let MOTimageElement = document.createElement('img');
                            let MOTValue = options.dataViews[0].categorical.categories[3].values[i].toString();
                            if (MOTValue.toLowerCase() === 'highway') {
                                MOTimageElement.src = 'data:image/png;base64,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';
                            }
                            else if (MOTValue.toLowerCase() === 'rail') {
                                MOTimageElement.src = 'data:image/png;base64,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';
                            }
                            else if (MOTValue.toLowerCase() === 'air') {
                                MOTimageElement.src = 'data:image/png;base64,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';
                            }
                            else if (MOTValue.toLowerCase() === 'water') {
                                MOTimageElement.src = 'data:image/png;base64,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';
                            }
                            gridItem.appendChild(MOTimageElement);
                        }
                        // Append grid item to the grid container
                        gridContainer.appendChild(gridItem);
                    }
                }
                // Append the grid container to the main containerDiv
                div.appendChild(gridContainer);
                containerDiv.appendChild(div);
            }
        }
        this.target.appendChild(containerDiv);
    }
    getFormattingModel() {
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);
    }
    getColumnIndex(dataView, columnName) {
        let columns = dataView.table.columns;
        for (let i = 0; i < columns.length; i++) {
            if (columns[i].displayName === columnName) {
                return i;
            }
        }
        return -1;
    }
}


/***/ }),

/***/ 84:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hn: () => (/* binding */ Model),
/* harmony export */   L_: () => (/* binding */ NumUpDown),
/* harmony export */   Zb: () => (/* binding */ Card),
/* harmony export */   Zh: () => (/* binding */ ToggleSwitch),
/* harmony export */   zH: () => (/* binding */ ColorPicker)
/* harmony export */ });
/* unused harmony exports SimpleSlice, AlignmentGroup, Slider, DatePicker, ItemDropdown, AutoDropdown, DurationPicker, ErrorRangeControl, FieldPicker, ItemFlagsSelection, AutoFlagsSelection, TextInput, TextArea, FontPicker, GradientBar, ImageUpload, ListEditor, ReadOnlyText, ShapeMapSelector, CompositeSlice, FontControl, MarginPadding, Container, ContainerItem */
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(827);
/**
 * Powerbi utils components classes for custom visual formatting pane objects
 *
 */

class NamedEntity {
}
class Model {
}
class Card extends NamedEntity {
    getFormattingCard(objectName, group, localizationManager) {
        return {
            displayName: (localizationManager && this.displayNameKey)
                ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName,
            description: (localizationManager && this.descriptionKey)
                ? localizationManager.getDisplayName(this.descriptionKey) : this.description,
            groups: [group],
            uid: objectName,
            analyticsPane: this.analyticsPane
        };
    }
}
class SimpleSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const sliceDisplayName = (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName;
        const sliceDescription = (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description;
        const componentDisplayName = {
            displayName: sliceDisplayName,
            description: sliceDescription,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName, localizationManager)
            } });
    }
    getFormattingComponent(objectName, localizationManager) {
        return {
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getDescriptor */ .B(objectName, this),
            value: this.value,
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return [{
                objectName: objectName,
                propertyName: this.name
            }];
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a;
        let newValue = (_a = dataViewObjects === null || dataViewObjects === void 0 ? void 0 : dataViewObjects[objectName]) === null || _a === void 0 ? void 0 : _a[this.name];
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyValue */ .S(this, newValue, this.value);
    }
}
class AlignmentGroup extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "AlignmentGroup" /* visuals.FormattingComponent.AlignmentGroup */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mode: this.mode, supportsNoSelection: this.supportsNoSelection });
    }
}
class ToggleSwitch extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ToggleSwitch" /* visuals.FormattingComponent.ToggleSwitch */;
    }
}
class ColorPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ColorPicker" /* visuals.FormattingComponent.ColorPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { defaultColor: this.defaultColor, isNoFillItemSupported: this.isNoFillItemSupported });
    }
}
class NumUpDown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "NumUpDown" /* visuals.FormattingComponent.NumUpDown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { options: this.options });
    }
}
class Slider extends (/* unused pure expression or super */ null && (NumUpDown)) {
    constructor() {
        super(...arguments);
        this.type = "Slider" /* visuals.FormattingComponent.Slider */;
    }
}
class DatePicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "DatePicker" /* visuals.FormattingComponent.DatePicker */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: (localizationManager && this.placeholderKey) ? localizationManager.getDisplayName(this.placeholderKey) : this.placeholder, validators: this.validators });
    }
}
class ItemDropdown extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoDropdown extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mergeValues: this.mergeValues, filterValues: this.filterValues });
    }
}
class DurationPicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "DurationPicker" /* visuals.FormattingComponent.DurationPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class ErrorRangeControl extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "ErrorRangeControl" /* visuals.FormattingComponent.ErrorRangeControl */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class FieldPicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "FieldPicker" /* visuals.FormattingComponent.FieldPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators, allowMultipleValues: this.allowMultipleValues });
    }
}
class ItemFlagsSelection extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoFlagsSelection extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
}
class TextInput extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "TextInput" /* visuals.FormattingComponent.TextInput */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: this.placeholder });
    }
}
class TextArea extends (/* unused pure expression or super */ null && (TextInput)) {
    constructor() {
        super(...arguments);
        this.type = "TextArea" /* visuals.FormattingComponent.TextArea */;
    }
}
class FontPicker extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "FontPicker" /* visuals.FormattingComponent.FontPicker */;
    }
}
class GradientBar extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "GradientBar" /* visuals.FormattingComponent.GradientBar */;
    }
}
class ImageUpload extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ImageUpload" /* visuals.FormattingComponent.ImageUpload */;
    }
}
class ListEditor extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ListEditor" /* visuals.FormattingComponent.ListEditor */;
    }
}
class ReadOnlyText extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor() {
        super(...arguments);
        this.type = "ReadOnlyText" /* visuals.FormattingComponent.ReadOnlyText */;
    }
}
class ShapeMapSelector extends (/* unused pure expression or super */ null && (SimpleSlice)) {
    constructor(object) {
        super(object);
        this.type = "ShapeMapSelector" /* visuals.FormattingComponent.ShapeMapSelector */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { isAzMapReferenceSelector: this.isAzMapReferenceSelector });
    }
}
class CompositeSlice extends (/* unused pure expression or super */ null && (NamedEntity)) {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName) {
        const controlType = this.type;
        const propertyName = this.name;
        const componentDisplayName = {
            displayName: this.displayName,
            description: this.description,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName)
            } });
    }
}
class FontControl extends (/* unused pure expression or super */ null && (CompositeSlice)) {
    constructor(object) {
        super(object);
        this.type = "FontControl" /* visuals.FormattingComponent.FontControl */;
    }
    getFormattingComponent(objectName) {
        var _a, _b, _c;
        return {
            fontFamily: this.fontFamily.getFormattingComponent(objectName),
            fontSize: this.fontSize.getFormattingComponent(objectName),
            bold: (_a = this.bold) === null || _a === void 0 ? void 0 : _a.getFormattingComponent(objectName),
            italic: (_b = this.italic) === null || _b === void 0 ? void 0 : _b.getFormattingComponent(objectName),
            underline: (_c = this.underline) === null || _c === void 0 ? void 0 : _c.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.fontFamily.getRevertToDefaultDescriptor(objectName)
            .concat(this.fontSize.getRevertToDefaultDescriptor(objectName))
            .concat(this.bold ? this.bold.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.italic ? this.italic.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.underline ? this.underline.getRevertToDefaultDescriptor(objectName) : []);
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a, _b, _c;
        this.fontFamily.setPropertiesValues(dataViewObjects, objectName);
        this.fontSize.setPropertiesValues(dataViewObjects, objectName);
        (_a = this.bold) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, objectName);
        (_b = this.italic) === null || _b === void 0 ? void 0 : _b.setPropertiesValues(dataViewObjects, objectName);
        (_c = this.underline) === null || _c === void 0 ? void 0 : _c.setPropertiesValues(dataViewObjects, objectName);
    }
}
class MarginPadding extends (/* unused pure expression or super */ null && (CompositeSlice)) {
    constructor(object) {
        super(object);
        this.type = "MarginPadding" /* visuals.FormattingComponent.MarginPadding */;
    }
    getFormattingComponent(objectName) {
        return {
            left: this.left.getFormattingComponent(objectName),
            right: this.right.getFormattingComponent(objectName),
            top: this.top.getFormattingComponent(objectName),
            bottom: this.bottom.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.left.getRevertToDefaultDescriptor(objectName)
            .concat(this.right.getRevertToDefaultDescriptor(objectName))
            .concat(this.top.getRevertToDefaultDescriptor(objectName))
            .concat(this.bottom.getRevertToDefaultDescriptor(objectName));
    }
    setPropertiesValues(dataViewObjects, objectName) {
        this.left.setPropertiesValues(dataViewObjects, objectName);
        this.right.setPropertiesValues(dataViewObjects, objectName);
        this.top.setPropertiesValues(dataViewObjects, objectName);
        this.bottom.setPropertiesValues(dataViewObjects, objectName);
    }
}
class Container extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
class ContainerItem extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ }),

/***/ 261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormattingSettingsService */
class FormattingSettingsService {
    constructor(localizationManager) {
        this.localizationManager = localizationManager;
    }
    /**
     * Build visual formatting settings model from metadata dataView
     *
     * @param dataViews metadata dataView object
     * @returns visual formatting settings model
     */
    populateFormattingSettingsModel(typeClass, dataViews) {
        var _a, _b, _c;
        let defaultSettings = new typeClass();
        let dataViewObjects = (_b = (_a = dataViews === null || dataViews === void 0 ? void 0 : dataViews[0]) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.objects;
        if (dataViewObjects) {
            // loop over each formatting property and set its new value if exists
            (_c = defaultSettings.cards) === null || _c === void 0 ? void 0 : _c.forEach((card) => {
                var _a, _b, _c;
                (_a = card === null || card === void 0 ? void 0 : card.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                    slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                });
                (_c = (_b = card === null || card === void 0 ? void 0 : card.container) === null || _b === void 0 ? void 0 : _b.containerItems) === null || _c === void 0 ? void 0 : _c.forEach((containerItem) => {
                    var _a;
                    (_a = containerItem === null || containerItem === void 0 ? void 0 : containerItem.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                        slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                    });
                });
            });
        }
        return defaultSettings;
    }
    /**
     * Build formatting model by parsing formatting settings model object
     *
     * @returns powerbi visual formatting model
     */
    buildFormattingModel(formattingSettingsModel) {
        var _a;
        let formattingModel = {
            cards: []
        };
        (_a = formattingSettingsModel.cards) === null || _a === void 0 ? void 0 : _a.forEach((card) => {
            if (!card)
                return;
            const objectName = card.name;
            const groupUid = card.name + "-group";
            let formattingGroup = {
                displayName: undefined,
                slices: [],
                uid: groupUid
            };
            let formattingCard = card.getFormattingCard(objectName, formattingGroup, this.localizationManager);
            formattingModel.cards.push(formattingCard);
            // In case formatting model adds data points or top categories (Like when you modify specific visual category color).
            // these categories use same object name and property name from capabilities and the generated uid will be the same for these formatting categories properties
            // Solution => Save slice names to modify each slice uid to be unique by adding counter value to the new slice uid
            const sliceNames = {};
            // Build formatting container slice for each property
            if (card.container) {
                const container = card.container;
                const containerUid = groupUid + "-container";
                const formattingContainer = {
                    displayName: (this.localizationManager && container.displayNameKey)
                        ? this.localizationManager.getDisplayName(container.displayNameKey) : container.displayName,
                    description: (this.localizationManager && container.descriptionKey)
                        ? this.localizationManager.getDisplayName(container.descriptionKey) : container.description,
                    containerItems: [],
                    uid: containerUid
                };
                container.containerItems.forEach((containerItem) => {
                    // Build formatting container item object
                    const containerIemName = containerItem.displayNameKey ? containerItem.displayNameKey : containerItem.displayName;
                    const containerItemUid = containerUid + containerIemName;
                    let formattingContainerItem = {
                        displayName: (this.localizationManager && containerItem.displayNameKey)
                            ? this.localizationManager.getDisplayName(containerItem.displayNameKey) : containerItem.displayName,
                        slices: [],
                        uid: containerItemUid
                    };
                    // Build formatting slices and add them to current formatting container item
                    this.buildFormattingSlices(containerItem.slices, objectName, sliceNames, formattingCard, formattingContainerItem.slices);
                    formattingContainer.containerItems.push(formattingContainerItem);
                });
                formattingGroup.container = formattingContainer;
            }
            if (card.slices) {
                // Build formatting slice for each property
                this.buildFormattingSlices(card.slices, objectName, sliceNames, formattingCard, formattingGroup.slices);
            }
            formattingCard.revertToDefaultDescriptors = this.getRevertToDefaultDescriptor(card);
        });
        return formattingModel;
    }
    buildFormattingSlices(slices, objectName, sliceNames, formattingCard, formattingSlices) {
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            let formattingSlice = slice === null || slice === void 0 ? void 0 : slice.getFormattingSlice(objectName, this.localizationManager);
            if (formattingSlice) {
                // Modify formatting slice uid if needed
                if (sliceNames[slice.name] === undefined) {
                    sliceNames[slice.name] = 0;
                }
                else {
                    sliceNames[slice.name]++;
                    formattingSlice.uid = `${formattingSlice.uid}-${sliceNames[slice.name]}`;
                }
                // Set as topLevelToggle if topLevelToggle boolean was set to true
                if (slice.topLevelToggle) {
                    formattingSlice.suppressDisplayName = true;
                    formattingCard.topLevelToggle = formattingSlice;
                }
                else {
                    formattingSlices.push(formattingSlice);
                }
            }
        });
    }
    getRevertToDefaultDescriptor(card) {
        var _a, _b;
        // Proceeded slice names are saved to prevent duplicated default descriptors in case of using 
        // formatting categories & selectors, since they have the same descriptor objectName and propertyName
        const sliceNames = {};
        let revertToDefaultDescriptors = [];
        let cardSlicesDefaultDescriptors = this.getSlicesRevertToDefaultDescriptor(card.name, card.slices, sliceNames);
        let cardContainerSlicesDefaultDescriptors = [];
        (_b = (_a = card.container) === null || _a === void 0 ? void 0 : _a.containerItems) === null || _b === void 0 ? void 0 : _b.forEach((containerItem) => {
            cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, containerItem.slices, sliceNames));
        });
        revertToDefaultDescriptors = cardSlicesDefaultDescriptors.concat(cardContainerSlicesDefaultDescriptors);
        return revertToDefaultDescriptors;
    }
    getSlicesRevertToDefaultDescriptor(cardName, slices, sliceNames) {
        let revertToDefaultDescriptors = [];
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            if (slice && !sliceNames[slice.name]) {
                sliceNames[slice.name] = true;
                revertToDefaultDescriptors = revertToDefaultDescriptors.concat(slice.getRevertToDefaultDescriptor(cardName));
            }
        });
        return revertToDefaultDescriptors;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattingSettingsService);
//# sourceMappingURL=FormattingSettingsService.js.map

/***/ }),

/***/ 827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ getDescriptor),
/* harmony export */   S: () => (/* binding */ getPropertyValue)
/* harmony export */ });
/**
 * Build and return formatting descriptor for simple slice
 *
 * @param objectName Object name from capabilities
 * @param slice formatting simple slice
 * @returns simple slice formatting descriptor
 */
function getDescriptor(objectName, slice) {
    return {
        objectName: objectName,
        propertyName: slice.name,
        selector: slice.selector,
        altConstantValueSelector: slice.altConstantSelector,
        instanceKind: slice.instanceKind
    };
}
/**
 * Get property value from dataview objects if exists
 * Else return the default value from formatting settings object
 *
 * @param value dataview object value
 * @param defaultValue formatting settings default value
 * @returns formatting property value
 */
function getPropertyValue(slice, value, defaultValue) {
    if (value == null || (typeof value === "object" && !value.solid)) {
        return defaultValue;
    }
    if (value.solid) {
        return { value: value === null || value === void 0 ? void 0 : value.solid.color };
    }
    if (slice === null || slice === void 0 ? void 0 : slice.items) {
        let itemsArray = slice.items;
        return itemsArray.find(item => item.value == value);
    }
    return value;
}
//# sourceMappingURL=FormattingSettingsUtils.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(546);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var incidentCard02E2F56F88BB4FCE98B627DBA9F48EC1_DEBUG = {
    name: 'incidentCard02E2F56F88BB4FCE98B627DBA9F48EC1_DEBUG',
    displayName: 'IncidentCard',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .u) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .u(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["incidentCard02E2F56F88BB4FCE98B627DBA9F48EC1_DEBUG"] = incidentCard02E2F56F88BB4FCE98B627DBA9F48EC1_DEBUG;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (incidentCard02E2F56F88BB4FCE98B627DBA9F48EC1_DEBUG);

})();

incidentCard02E2F56F88BB4FCE98B627DBA9F48EC1_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=https://localhost:8080/assets/visual.js.map