// 20230321 - JavaScript Front-End 202302 - HTTP and REST - Lab
// 03 - Github: Create issue


// Create issue steps:
/* 

1. Open Postman
2. Choose POST (from the left hand side menu)
3. Paste the https://api.github.com/repos/testnakov/test-nakov-repo/issues
4. Choose 'Body' button located one level below
5. Choose from the radio buttons an option (most likely 'raw')
6. Choose from the same line at the end (for example JSON) and enter the JSON format in the field below

In the body wrote the following JSON file but the Postman or GitHub API have some problems and couldn't be sent.
{
    "title": "I created and issue by following the instructions of the instructor.",
    "body": "This issue is just a test so go ahead and order pizza...",
    "labels":["bug"]
}

7. From the line under POST click 'Authorization', click on 'Basic' and enter your github credentials.
8. Click SEND to send the issue. (for us didn't work))

9. Postman should return code 201 which means that the issue has been successfully created.

*/
