// Define a function to select elements using XPath
function selectElement(xpath) {
    return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

// Find the email input field and set its value
var email = 'stellarbyte@fortbendfuture.dev';
var emailInput = selectElement('//*[@id="identifierId"]');
if (emailInput) {
    emailInput.value = email;
    emailInput.dispatchEvent(new Event('input', { bubbles: true }));
} else {
    console.error('Email input field not found!');
}

// Click the next button for email
var nextButton = selectElement('//*[@id="identifierNext"]/div/button/span');
if (nextButton) {
    nextButton.click();
} else {
    console.error('Next button not found for email!');
}

// Set a timeout to fill the password field and click its next button
setTimeout(function() {
    var password = 'Haris123@';
    var passwordInput = selectElement('//*[@id="password"]/div[1]/div/div[1]/input');
    if (passwordInput) {
        passwordInput.value = password;
        passwordInput.dispatchEvent(new Event('input', { bubbles: true }));
    } else {
        console.error('Password input field not found!');
    }

    var passwordNextButton = selectElement('//*[@id="passwordNext"]/div/button/span');
    if (passwordNextButton) {
        passwordNextButton.click();
    } else {
        console.error('Password next button not found!');
    }
}, 7000);

// Set a timeout to fill the recovery email field and click its next button
setTimeout(function() {
    // Evaluate the XPath expression to find the desired element
    var xpathResult = document.evaluate(
      '//*[@id="yDmH0d"]/c-wiz/div/div[2]/div/div[1]/div/form/span/section[2]/div/div/section/div/div/div/ul/li[3]/div/div[2]',
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );

    // Extract the node from the XPath result
    var element = xpathResult.singleNodeValue;

    // Check if the element is found
    if (element) {
      // Simulate a click event on the element
      element.click();
    } else {
      console.log("Element not found!");
    }
    // Set a timeout to fill the recovery email field and click its next button
    setTimeout(function() {
        // Find the element for next button in recovery email section using XPath
        var recoveryNextButton = document.evaluate('//*[@id="yDmH0d"]/c-wiz/div/div[3]/div/div[2]',
            document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (recoveryNextButton) {
            recoveryNextButton.click();
        } else {
            console.error('Try Another Way next button not found!');
        }

        // Find the element for next button in recovery email section using XPath
        var recoveryNextButton2 = document.evaluate('//*[@id="yDmH0d"]/c-wiz/div/div[2]/div/div/div/form/span/section[2]/div/div/section/div/div/div/ul/li[2]',
            document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (recoveryNextButton2) {
            recoveryNextButton2.click();
        } else {
            console.error('Backup Codes next button not found!');
        }

         var backupcode = '2542 5653';
         var backupcodeInput = selectElement('//*[@id="yDmH0d"]/c-wiz/div/div[2]/div/div/div/form/span/section[3]/div/div/div[1]/div/div[1]/div/div[1]/div');
         if (backupcodeInput) {
             backupcodeInput.value = backupcode;
             backupcodeInput.dispatchEvent(new Event('input', { bubbles: true }));
         } else {
             console.error('backupcode input field not found!');
         }

         var backupcodeNextButton = selectElement('//*[@id="backupCodeNext"]/div');
         if (backupcodeNextButton) {
             backupcodeNextButton.click();
         } else {
             console.error('backupcode next button not found!');
         }
    }, 2000); // Assuming the delay for the recovery email section is 5000 milliseconds

}, 15000); // Assuming the delay for the recovery email section is 15000 milliseconds
