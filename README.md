# Project Title

## 1. Project Description
State your app in a nutshell, or one-sentence pitch. Give some elaboration on what the core features are.  
This browser based web application is a banking app. This app helps you keep track of your finances by let you access everything in one place. 
This browser based web application to make a mistake

## 2. Names of Contributors
List team members and/or short bio's here... 
* Monica, Group leader 
* Max R
* Jaskunwar Hunjan 	


## 3. Technologies and Resources Used
List technologies (with version numbers), API's, icons, fonts, images, media or data sources, and other resources that were used.
* HTML, CSS, JavaScript
* Bootstrap 5.0 (Frontend library)
* Firebase 8.0 (BAAS - Backend as a Service)
* ...

## 4. Complete setup/installion/usage
State what a user needs to do when they come to your project.  How do others start using your code or application?
Here are the steps ...
* Create a account
* Set a budget after loggin in using the setbudget page
* Add transactions using the transactions page
* View spendings on the monthlyspending page
* Delete all spending and budget using the Delete all data button on the monthyspendings page

## 5. Known Bugs and Limitations
Here are some known bugs:
* Sometimes the app does not update the budget after adding a transaction on the first attempt

## 6. Features for Future
What we'd like to build in the future:
* Add graphs to display spendings vs budget
	
## 7. Contents of Folder
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── index.html               # landing HTML file, this is what users see when you come to url
└── README.md

It has the following subfolders and files:
├── .git                           # Folder for git repo
├── text                           # Pages for html
    /aboutus.html                  # About us page for all team members
    /addtransactions.html          # Asking the users if they have eaten out 
    /congrats.html                 # Congrats page that displays congrats message
    /footer.html                   # Footer page that displays the footer
    /login.html                    # Login page for the users to login
    /main.html                     # Main page is the landing and home page of the app
    /monthlyspending.html          # Monthly spendings page page to compare spending
    /nav_after_login.html          # Nav bar after login display page
    /nav_before_login.html         # Nav bar before login display page
    /profile.html                  # Profile page that shows user profile
    /setbudget.html                # Set Buget page for the user to set a budget
    /template.html                 # Template page
    /transaction.html              # Transactions page to add transactions
├── images                         # Folder for images
    /Back button.png               # https://cdn-icons-png.flaticon.com/512/93/93634.png
    /calender2.png                 # https://www.freeiconspng.com/img/4096  
    /CraveControlBlueLogo.png      # Made on logo.com
    /Logo.png                      # Made on looka.com
    /money.png                     # https://pngbuy.com/Download/money-sign-png/#google_vignette
    /plus.png                      # https://www.pngwing.com/en/free-png-yjbij
    /Set Budget Page image.png     # https://static.thenounproject.com/png/4436557-200.png
    /Background image              # https://img.pixers.pics/pho_wat(s3:700/FO/10/78/61/95/3/700_FO107861953_4fbb9333efac26f172231c15d8c0934c.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-thin-line-icons-seamless-pattern-food-vegetables-and-fruits-icon-grey-background-for-websites-apps-presentations-cards-templates-or-blogs.jpg.jpg
├── scripts                        # Folder for scripts
    /authentication.js             # Authenticates User for Firebase
    /firebaseAPI_BBY20.js          # Firestore API keys
    /main.js                       # Gets the user name as well as the current month and budget from firebase and displays it
    /monthlyspending.js            # Gets the yearly and monthly spendings from firebase and displays it, also has a delete button to delete all the spendings and budget
    /profile.js                    # Gets user name and email from firebase and displays it
    /script.js                     # Logs out the user
    /setbudget.js                  # Sets the budget for the specific month to firebase
    /skeleton.js                   # Loads the footer and navbar
    /transaction.js                # Adds the taransaction to fire base under each individual month
├── styles                         # Folder for styles
    /style.css                     # CSS for all the pages



```


