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
        if (options.dataViews[0].categorical.categories.length >= 3) {
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
                let spillageResultValue = options.dataViews[0].categorical.categories[2].values[i].toString();
                // Create image element based on the "Spillage Result Ind" value
                let imageElement = document.createElement('img');
                if (spillageResultValue.toLowerCase() === 'yes') {
                    imageElement.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABUCAYAAAACoiByAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAA0dSURBVHhe7Zx5VBRHHse/zAwwwHDIjQFxVTRyeAFeeGCMGk18q8bVNS/GuIrH0+StRpNo/nBfVk00Jj4T3fiiyYu4Ro3RjUc8Ed2wiUcWxUBQOULAcJ8jM8zAMNNbVdMgwyEDTPeO7/WHV2+6q34zVH+7uupX1b9uB44ACcGR8Z8SAiMJLRKS0CIhCS0SktAiIQktEpLQIiEJLRKS0CIhCS0SktAi0WOhDQYD1q1bBz8/P3h7e2Pt2rUsrz20Wi2WLVsGT09PBAYGYuvWrbDVUovRaMTGjRvh6+vL6rFmzRo0NDTwpZbU1dVh+fLlrB5BQUHYtGkTTCYTXyoQdFGpJxBhqVKcs7Mzp1Qq2faKFSv4Ukvmzp3Lyl1dXTlHR0e2vWPHDr60Z6xfv75NPchJ5UstmTdvXpt6bNmyhS8Vhh6v3vn4+LAW8kt6BkilEREVyfYDAgJ4i0eUlJSw/Du301BUXIThI0bAycmJ/UZPKS8vh0wmQ0Z6OpTOSkQOiYJGo+mwHv7+/qwepaWlGDp8GPr374/s7GzeQgCY3D2A/kRoaChXr9OzFB4ezvIc5HJOJlc0JweZnOWPHze+2ValUrG8lnbdTfR3QoKDm387KjLysfWIGxvXbOvh4cGR7oY/ImHocYt2cHAAERpZ9+6z/eHRI5CZmYmYl96CXOHE8ij1GjXSTnyM8ePHI+niJZbn4+cLvcGI6Pnr2H5PuJG4GSHBTyEnO4ftx8TGID0jAzEL3oTc0ZnlUeq1D5F2fBfi4uKQnHSZ5fkF+EOhUKCyspLtC4HkdYiEJLRISEKLhCS0SEhCi4QktEhIQouE3QrNcSYYdFqYjI18zpON3QndoNMg94dT+O/hD3Dr2EfkcxvuJR1C9e9ZVH3e6snDroSmLTjz3BeoyL0DNzKZi40KhH8vJdRFvyIr+SgyLyRCW1XCWz9Z2JXQBbeS2FR9wfNPo+j75bj59UsoJJ/HP56JoU/7obasABnf7UdBahJMje0vxdordiM0Fa7yt0x4eyqx/+9ToHJ1ZPlymQPmTAlD6vGX8emmyfBSOaL4l2tIP7MPmooiZvMkYDdC05bMkYFvJOkuXF3MIrdEZjIi4Zlg3PlsOiYN84f+YSXuXkyE0VDPW9g3diO0TC5nnxqdZZfAmUwwqWthLCmHSV+Pq2lluJNbw8qUHt7kewq2be/YjdBOKi84uqhw/U4xsrJKYarTwVithrGIbD+sxf0CNWZsvIpF266hqtaAwMEjEfHcYjjIzCeop9DV4urqanbTQgjsRmi6rh0UPhqNjSZMX3ES357OQGF+BX5IL8OrRNyhCeeQlFoCF09fhD+3CKGx0yBTtO1iugsVmd5rdHd3x+TJk1FQUMCX2Aa7EZoSGD4KPn0j8WuxBi/+LQWhC04ifu1lHLqcDyic0SdmCqJmLoO7fwj/DRtCTrSbTxAUShWSk5Mxa9Ys1spthV0J7eAgw4AJszFw0jz4/CECKr9geAUPRN9RMzD8xddZi7dVV9EahaMzIp9fimFzXoOrdyBu376NiRMnYsqUKZg5cyZWr16NxMRE1NSYx4euYldCN9ErZBAGjJ+DiOmLMeiZ+QgYFG1xO0pIHGQyuHr5se2UlBQkJSXhzJkz2LNnDxYtWoQ+ffpg27ZtXW7tdim0vXBo41jc//IF3NgzFcc2jcPSGf1hqK/D22+/jQ0bNvBW1iEJ/RiC/FzRr7cKI8K8MSsuGJ/+NRbXd0+Fr6cztm/fjtTUVN6ycyShW0G7hKaoJbmvNxTBQZCRTyjMY0NEX09sXTKE2e3du5flWYNgQpsaG2Ek0+qm1OFyJ+nqWtp1N3VEa7uO6kGF01SXQltTRuxahJIRb0TmoiSiPwrymT0uBDIHcx9uLYIJrautskh6TTVfYglH/lrbdid1hI7835Z2HdXDAn6go759Ew6OZAZKE8FL5QRvD2cUFhayfWuwidCciSMTDSNLJrL9OOhl2WgkyWDs8sjdGfRfW10PWgeSDMTWXA/SZZDWXq+pQV1VCajEfXt7MNsmqPvZhJtSwYI2rcUmQptIRWvUOpY6E89oJLY1dah5qONzbAf93031oHV6HPRE0HqoiS3FaGjA3bNfIOfK1zDoNBg22B8hQe6srCO60lAE6zq0lUXQlBc2p44W7DmT0cKuZdJWllgcDF2xa8+OJtoi20NbYVkP2lrbQy6XIyIiAsOGDWP7zk62nRj1OPaOVjAwIBA//fQz258YPwY5OR1HZcbGjsK3//qOCTggrA/0+se37PGzFqHv01HQPlTjxD82k5yOqxtA6nErNYNtT3omDllZ5njA9oiJjsXJk+dYPQYOCoWLiwsqKipYpCmNmR49NAjXjizgrc0YSyvA8THXAxaeRn6p1upW3eM1RhrumpOTg0OHEuHo5IS8vF9ZMPicOXN4i0d89dVXSE+/Q2Zap/Dg9wImcr9+/fDss8/yFpaoVCq88847bLGHHtCWICc8ePCAL7Xk9OnTTKSD/zwAF6USubk5LDh+9uzZvMUjDh8+jPSMn8l3TqKomLTyujpERUXxpQJBDqBHHD16lJPJZPS0skS3ExMT+VJLdu7c2WxHEw0aT05O5kt7xokTJzhydTX/NvEYuIMHD/KlluzatcuiHjQY/cKFC6ysuLiY5ZEWzXF311qkxquvcIaLf2YpNMCN2VmLTV4jQf1JuuBCPQq6HjBhwgS+pC3nzp0DOTlQkla3YsWK5j7RFly/fh2ff/45q8fChQsRHx/Pl7Tl/PnzOHLkCOsylixZgpiYGJYvVNchva+jFUIJLZjXIWGJJLRISEKLhCS0SEhCi4QktEhIQreiKa5DIW9PmkeuXH2Dkfng1iKYH02fwz5w4ACuXLnCnmBtCZ2sjBw5kj0X7uFhuRRJqaqqYncv6J3o+vquh3yRGSfef/99tjxAD48+n56bm8uXPp6srCzcv38fbyyOxo43J/K5BPI7jUUlbC1WT0Tu9cdv0PupEOTn5/MGnUCFtjVarZYbO3YsPYGPTUQIrrCwkP+WmezsbC44OLhd+66kI5+8wnH5n3Daezs4lav5eW9r0+TRfbiam6sspt+mtFXN0+/kDyczu+nTp/O17hxBWjRdCKJvLoiNDMC2dRPg7+PKl5ip1TZgy67vceZaIebOnYtjx47xJWALTJcvX8b8GYOw9tVouLUT8NgZTo4yhIX24veAsqo6lFdZt/5No1hDWy34U4zlleD05qsr4cMb+PJCHnbv3o1Vq1axvM4QROjw8HDcu3sX+VcSEBLYdvHcVKuFtrQK/V4+hVo9WNdCHxFWq9Vspa5PkApZ5/8CR4V9DCEmbR1MVebAmdSsKsS9fgnuHp7Iy8uDl5cXy+8MQY6EDigymQO8ZY0w1TxskdQwllWwTxdnOdxdFawvb2w03zDV6XRsQYjGSNuNyHWkTrzImb+pWaiakfTT9Iq1VmSKIEdDH6ynlXnjgxTUVxOBazV80oKrb2AD1M5v7iGvWMtWzejgSKEvSwkLC8OtzDLs/ybd6gUbIaDhwjSatbG8Chl5NdiwPw2jX7uIwgodG8RXrlzJW1qHIF0HHeGpV0G9B5WLAu6t+tm6+kaotQb2ro5Lly5ZLKvS8CsaYEjfKNOLtGxlq1tK1O2ij1lsXTMOUQN9+dy2ZGRXYMNH/8Gde+XsJmyXIULT+4pqTQP0BvP3XV1d8e677zIvpuUdcmsQzL2jbhINm6LunV5POuIW0BeoxMbGYvPmzRg9ejSf+wj6Hfr6nbS0tOZupQm6T18lRE9CxqlX0NtfxZc8orhci8iZB1Cl1rP/Rfv/7kLdz8GDB2Pq1KlYvHgxu+q6BRX6SYKIzCUkJNDGwW1fP8HCBWtKO96cwMqXLFnC7O0B+xhxugBtndSroWiIm9geGtItUahdT1qzLbF511FbW4t9+/bh5s2bgjymQLuNq1evkhmjHjeOvsSeRWxN6i+liP3TITIGOGPSpEms+2gPOoMcMmQIu6VGb+QKiU2FpiFSNHjb2ulud3Ejk4oPyfR4+fwhfE5bPvv6Z7yx7d/Q1HX+PCJ9wRWN8m+6UoTApkLTWd7x48fxQnw/vLU0Fi5K21+21OsYEOpl1YxRqzMgp6CGDKBmr4G6a8RxZ9uUBpK/93QODiX9hjFjxuDHH3/kS2yPzYSmlzSNw/B0kyM/OUEQkXsCR1w8Y0kZc9taQv39IUvPIrtQg6Kiou57FZ1gM6Fpf0yF7hfkhvtH58KB+MgsUtAOoCJzZIZHnHM+xxL6QNIPGeUsEIiu+AmBTbuO6Oho3Lp1Cx+tHIHVs8K67NT/Pzh6NR8L37uG3r2fYo+80ZcUCoFNhaYTjWnTprFuxMfDCR5uXV95ExOtrhFlNfVMXBomNm/ePL5EAKjQtiQlJYWLj4/nXFxc6Am060TfYTpq1Cju7NmzfO2Fw6YtWqJjnriZ4ZOKJLRISEKLhCS0SEhCi4QktEhIQouEJLRISEKLAvA/bRIYefe+zcUAAAAASUVORK5CYII=';
                    imageElement.classList.add('spillage-yes'); // Add CSS class for 'yes'
                }
                else {
                    imageElement.src = 'data:image/png;base64,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';
                    imageElement.classList.add('spillage-no'); // Add CSS class for 'no'
                }
                // Append image element to the div
                div.appendChild(imageElement);
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