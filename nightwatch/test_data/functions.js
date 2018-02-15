const selectors = require('../test_data/selectors')

module.exports = {
    enterValue: (selector, input, browser) => {
        browser
            .clearValue(selector)
            .setValue(selector, input)
            .verify.value(selector, input)
    },
    fullFormEntry: (test, browser) => {
        browser.click(selectors.button.next) //first page
        browser.pause(200)
        if (test.loanType || test.propertyType) { //page two
            if (test.loanType) {
                browser.setValue(selectors.dropDownBox.loanType, test.loanType)
            }
            if (test.propertyType) {
                browser.setValue(selectors.dropDownBox.propertyType, test.propertyType)
            }
            browser.click(selectors.button.next)
            browser.pause(200)
        }
        if (test.cityName) {
            browser.click(selectors.field.cityName)
            browser.setValue(selectors.field.cityName, test.cityName)
                .verify.value(selectors.field.cityName, test.cityName)
            browser.click(selectors.button.next)
            browser.pause(200)
        }
        if (test.purchasePrice || test.downPayment) {
            browser.click(selectors.button[test.loanUse])
            browser.pause(200)
            browser.click(selectors.button[test.foundNew])
            browser.pause(200)
            browser.click(selectors.button[test.agent])
            browser.pause(200)
            if (test.purchasePrice) {
                browser.setValue(selectors.field.purchasePrice, test.purchasePrice)
                    .verify.value(selectors.field.purchasePrice, test.purchasePrice)
            }
            if (test.downPayment) {
                browser.setValue(selectors.field.downPayment, test.downPayment)
                    .verify.value(selectors.field.downPayment, test.downPayment)
            }
            browser.click(selectors.button.next)
        }
        if (test.address1 || test.address2 || test.address3) {
            browser.pause(200)
            browser.click(selectors.button[test.creditScore])
            browser.pause(200)
            browser.click(selectors.button[test.hadBankruptcy])
            browser.pause(200)
            if (test.address1) {
                browser.setValue(selectors.field.address1, test.address1)
                    .verify.value(selectors.field.address1, test.address1)
            }
            if (test.address2) {
                browser.setValue(selectors.field.address2, test.address2)
                    .verify.value(selectors.field.address2, test.address2)
            }
            if (test.address3) {
                browser.setValue(selectors.field.address3, test.address3)
                    .verify.value(selectors.field.address3, test.address3)
            }
            browser.click(selectors.button.next)
            browser.pause(200)
        }
        if (test.first || test.last || test.email) {
            if (test.first) {
                browser.setValue(selectors.field.first, test.first)
            }
            if (test.last) {
                browser.setValue(selectors.field.last, test.last)
            }
            if (test.email) {
                browser.setValue(selectors.field.email, test.email)
            }
            browser.click(selectors.button.next)
        }
    },
        checkResults: (selector, inputs, browser) => {
            let keys = Object.getOwnPropertyNames(selector)
            keys.forEach((key) => {
                if (inputs[key])
                    browser.expect.element(selector[key]).text.to.contain(inputs[key])
            })
        },
}