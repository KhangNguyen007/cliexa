# Cliexa is a project which helps customer create flowchart from predefined medical questionaire. 
To start the application in localhost:
Go to main directory, run 
+ git clone <gihthublink>
+ npm install
+ npm start



# How to add, modify, and delete a survey.
+ Go to the file called "Questionnaire.js"



+ How to delete a survey
1. Remove the code that contains that particular survey question 
2. Update the id for each question as needed. Make sure you have no duplicate ids.
3. Update the id where the yes and no buttons would jump to.

+ How to add a survey
1. Add code in this format. {id:#,q:"Question Text Here",yes:#,no:#}, where '#' is a unique id number to the question.
2. Make sure there is no duplicate id numbers 
3. Add the id numbers where you want the yes and no buttons would jump to.


+ How to modify a survey
1. You can change the text of the questions that is already coded. Just change any text you want inside the quotation marks.
2. You can change the id numbers the yes and no buttons will jump to.
