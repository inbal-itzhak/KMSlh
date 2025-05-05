# KMS Lighthouse Playwright tests
## Prerequesite
**Installations**
clone main branch:
git clone https://github.com/inbal-itzhak/KMSlh.git --branch main --single-branch [your-folder]  
navigate to: [your-folder]    
cd [your-folder]   
install dependencies:  
npm install playwright-test  


## running the tests  
tests are configured headless by deafult
to run all tests 
npx playwright test 

to run all tests headed  
npx playwright test --headed  

to run html report for last test run  
npx playwright show-report  

objectives answers and test cases are added to root folder, named: ObectiveAnswers.md