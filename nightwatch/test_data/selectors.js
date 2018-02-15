module.exports = {
    button: {
        next: 'button[name="nextButton"]',
        primaryHome: 'button[value="Primary Home"]',
        seconaryHome: 'button[value="Secondary Home"]',
        rentalProperty: 'button[value="Rental Property"]',
        yes: 'button[name="yesButton"]',
        no: 'button[name="noButton"]',
        excellent: 'button[value="Excellent"]',
        good: 'button[value="Good"]',
        fair: 'button[value="Fair"]',
        poor: 'button[value="Poor"]',
        notBankrupt: 'button[value="Has not been in bankruptcy or foreclosure"]',
        bankruptcy: 'button[value="Has had bankruptcy"]',
        foreclosure: 'button[value="Has had a foreclosure"]',
        both: 'button[value="Has had both a foreclosure and a bankruptcy"]'
    },
    dropDownBox: {
        loanType: 'select[id="loanTypes"]',
        propertyType: 'select[id="propertyTypes"]',
        purchasePrice: 'input[name="price"]',
        downPayment: 'input[name="down"]'
    },
    field: {
        cityName: 'input[name="city"]',
        propertyType: 'select[id="propertyType"]',
        purchasePrice: 'input[name="price"]',
        downPayment: 'input[name="down"]',
        address1: 'input[id="addressOne"]',
        address2: 'input[id="addressTwo"]',
        address3: 'input[id="addressThree"]',
        first: 'input[id="first"]',
        last: 'input[id="last"]',
        email: 'input[id="email"]'
    },
    prompts: {
        promptText: 'p[name="promptText"]',
        promptText1: 'p[name="promptText1"]',
        promptText2: 'p[name="promptText2"]',
    },
    results: {
        name: 'p[class="name p2"]',
        email: 'p[class="email p2"]',
        loanType: 'p[class="loanType p2"]',
        propertyType: 'p[class="propertyType p2"]',
        city: 'p[class="city p2"]',
        propertyPurpose: 'p[class="propertyPurpose p2"]',
        found: 'p[class="found p2"]',
        agent: 'p[class="agent p2"]',
        price: 'p[class="price p2"]',
        downPayment: 'p[class="downPayment p2"]',
        creditScore: 'p[class="creditScore p2"]',
        creditHistory: 'p[class="creditHistory p2"]',
        address1: 'span[id="addressOne"]',
        address2: 'span[id="addressTwo"]',
        address3: 'span[id="addressThree"]'
    },
    error: 'li[class="errorMessage"]',
    error1: 'p[class="errorMessage"]',
    error2: 'li[name="addTwoErrorMessage"]',
    error3: 'li[name="addThreeErrorMessage"]'
}