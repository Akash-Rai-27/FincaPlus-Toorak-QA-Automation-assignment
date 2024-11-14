# E-commerce Automation Test Report
#### Environment: https://www.saucedemo.com/
#### Browser: Chromium, Firefox, WebKit  (Playwright) 

---
# Description
- "pages" contains all the "PAGE OBJECT MODEL"
- tests/UiFramework.spec.js  - "Main test file"
- tests/APITesting.spec.js - "GET API with 200 status code"



# How to Run
1. clone this repo
    ```
    git clone https://github.com/Akash-Rai-27/FincaPlus-Toorak-QA-Automation-assignment.git
    ```
    ---

2. How  to run it 
    - UI Framework Automation
    ```
    npx playwright test tests/UiFramework.spec.js  
    ```
    - Show report
    ```
    npx playwright show-report
    ```
3. API Testing
    ```
    npx playwright test tests/APITesting.spec.js
    ```
    