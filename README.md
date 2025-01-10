# Video Streaming Application on AWS

## Introduction ##
+ Creating a video streaming application using Amazon S3 for storage, Amazon CloudFront for content delivery, and React as the frontend framework.

# Setting up S3 Bucket
+ Navigate to the AWS Management Console and search for "S3."
+ Click on the S3 service.
+ Create a new S3 bucket with the following details:
+ Bucket Name: kiran-videostreaming-storage (provide a unique name)
+ Region: US West (N. California) or your preferred region
+ Enable Bucket Versioning
+ Click on "Create Bucket."

<img width="944" alt="S3" src="https://github.com/Kiran090303/Video-Streaming/assets/98480971/15d90f7c-775e-4f18-8d0b-df8beeb55d25">

# Setting up CloudFront
+ Navigate to the AWS Management Console and search for "CloudFront."
+ Click on CloudFront and go to the "Origin Access Identity" section to create a new Origin Access Identity named "VideoStreaming-OAC."

<img width="706" alt="Origin Access" src="https://github.com/Kiran090303/Video-Streaming/assets/98480971/c308b3fa-75dd-4249-8932-fb199f73b2e4">

+ Create a CloudFront distribution with the following settings:
+ Select your S3 domain name as the origin
+ Viewer Protocol Policy: Redirect HTTP to HTTPS
+ Origin Access Control Settings: Enable Web Application Firewall (WAF)
+ Click on "Create Distribution."

<img width="938" alt="distribution" src="https://github.com/Kiran090303/Video-Streaming/assets/98480971/c329af10-869a-4c8d-b42a-015427b4a7a5">

# Update S3 Bucket Policy
+ Copy the bucket policy generated during CloudFront setup.
+ Navigate to your S3 bucket and click on "Permissions."
+ Go to the S3 policy editor and paste the copied policy.
+ Save changes.

<img width="908" alt="policy" src="https://github.com/Kiran090303/Video-Streaming/assets/98480971/56ebc279-92d2-44dd-b95e-3d3ef8a1a915">

# Upload Video File
+ Upload the desired video file to the S3 bucket.

<img width="750" alt="upload" src="https://github.com/Kiran090303/Video-Streaming/assets/98480971/b72cc912-bfc0-4c70-8df8-b6c0afe623bd">

# Test the Video
+ Go to the AWS CloudFront service and copy the distribution domain from your created distribution.

<img width="209" alt="Screenshot 2024-01-08 175548" src="https://github.com/Kiran090303/Video-Streaming/assets/98480971/de1ea2f1-929a-4d43-a3e6-c97c1bf9a373">

+ Go to your S3 bucket, copy the video object name.

<img width="118" alt="Screenshot 2024-01-08 175614" src="https://github.com/Kiran090303/Video-Streaming/assets/98480971/6efbb7c3-d7cb-406e-a549-9af93bd8bebe">

+ Paste both the distribution domain and video object name into your browser bar to test the video.

# Frontend Setup using React
+ Clone this repository.
+ Install dependencies:-npm install
+ Start the React application:-npm start
+ Open your browser and navigate to http://localhost:3000 to view the video streaming application.

https://github.com/Kiran090303/Video-Streaming/assets/98480971/51c42a37-44ed-45f2-a337-82f637009c8a

# Congratulations! You have successfully set up a video streaming application on AWS using S3, CloudFront, and React. Feel free to customize and enhance the application based on your requirements #
