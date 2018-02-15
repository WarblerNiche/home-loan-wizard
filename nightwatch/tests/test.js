const selectors = require('../test_data/selectors')
const data = require('../test_data/data')
const functions = require('../test_data/functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'full good entry': browser => {
        functions.fullFormEntry(data.test1, browser)
        functions.checkResults(selectors.results, data.test1.results, browser)
    },
    // 'loan type only': browser => {
    //     functions.fullFormEntry(data.test2, browser)
    //     browser.expect.element(selectors.error).text.to.equal(data.test2.error)
    // },
    // 'property type only': browser => {
    //     functions.fullFormEntry(data.test3, browser)
    //     browser.expect.element(selectors.error).text.to.equal(data.test3.error)
    // },
    'city name field bad entry': browser => {
        functions.fullFormEntry(data.test4, browser)
        browser.expect.element(selectors.error1).text.to.equal(data.test4.error)
    },
    'purchase price field blank': browser => {
        functions.fullFormEntry(data.test5, browser)
        browser.expect.element(selectors.error1).text.to.equal(data.test5.error)
    },
    'down payment field blank': browser => {
        functions.fullFormEntry(data.test6, browser)
        browser.expect.element('div[class="vert-align"]').text.to.contain(data.test6.error)
    },
    'address line 1 field long entry': browser => {
        functions.fullFormEntry(data.test7, browser)
        browser.expect.element(selectors.error).text.to.equal(data.test7.error)
    },
    'address line 1 field short entry': browser => {
        functions.fullFormEntry(data.test8, browser)
        browser.expect.element(selectors.error).text.to.equal(data.test8.error)
    },
    'address line 2 field long entry': browser => {
        functions.fullFormEntry(data.test9, browser)
        browser.expect.element(selectors.error2).text.to.equal(data.test9.error)
    },
    'address line 3 field blank': browser => {
        functions.fullFormEntry(data.test10, browser)
        browser.expect.element(selectors.error3).text.to.equal(data.test10.error)
    },
    // 'address line 3 field upper limit entry': browser => {
    //     functions.fullFormEntry(data.test11, browser)
    //     browser.expect.element(selectors.error).text.to.equal(data.test11.error)
    // },
    // 'address line 3 field bad entry,': browser => {
    //     functions.fullFormEntry(data.test12, browser)
    //     browser.expect.element(selectors.error).text.to.equal(data.test12.error)
    // },
    'first name field long entry': browser => {
        functions.fullFormEntry(data.test13, browser)
        browser.expect.element(selectors.error).text.to.equal(data.test13.error)
    },
    'first name field blank': browser => {
        functions.fullFormEntry(data.test14, browser)
        browser.expect.element(selectors.error).text.to.equal(data.test14.error)
    },
    'last name field blank and first name upper limit test': browser => {
        functions.fullFormEntry(data.test15, browser)
        browser.expect.element(selectors.error2).text.to.equal(data.test15.error)
    },
    'last name field long entry': browser => {
        functions.fullFormEntry(data.test16, browser)
        browser.expect.element(selectors.error2).text.to.equal(data.test16.error)
    },
    'email field long entry': browser => {
        functions.fullFormEntry(data.test17, browser)
        browser.expect.element(selectors.error3).text.to.equal(data.test17.error)
    },
    'email field bad entry': browser => {
        functions.fullFormEntry(data.test18, browser)
        browser.expect.element(selectors.error3).text.to.equal(data.test18.error)
    }
}
