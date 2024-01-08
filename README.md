# Video-Streaming
Using React with AWS S3 and CloudFront. Securely store media in S3, optimize global access with CloudFront, and ensure seamless communication with React . To achieve efficient distribution and scalability for a high-quality streaming experience.

# Introduction
This repository contains the setup instructions and code for creating a video streaming application using Amazon S3 for storage, Amazon CloudFront for content delivery, and React as the frontend framework.

# Setting up S3 Bucket
+ Navigate to the AWS Management Console and search for "S3."
+ Click on the S3 service.
+ Create a new S3 bucket.
+ Bucket Name: kiran-videostreaming-storage (provide a unique name).
+ Region: US West (N. California) or your preferred region.
+ Enable Bucket Versioning.
+ Click on "Create Bucket."

<img width="944" alt="S3" src="https://github.com/Kiran090303/ReferralBot/assets/98480971/ea3cfcfa-50f5-4f71-9984-8367e660d07a">

# Setting up CloudFront
+ Navigate to the AWS Management Console and search for "CloudFront."
+ Click on CloudFront and go to the "Origin Access Identity" section to create a new Origin Access Identity named "VideoStreaming-OAC."

<img width="706" alt="Origin Access" src="https://github.com/Kiran090303/ReferralBot/assets/98480971/e29696c7-8ba0-4162-a27d-2a61186e02e3">

+ Create a CloudFront distribution.
+ Select your S3 domain name as the origin.
+ Viewer Protocol Policy: Redirect HTTP to HTTPS.
+ Origin Access Control Settings: Enable Web Application Firewall (WAF).
+ Click on "Create Distribution."

<img width="938" alt="distribution" src="https://github.com/Kiran090303/ReferralBot/assets/98480971/607887ba-24a0-471a-87cb-4c4456177abf">

# Update S3 Bucket Policy
+ Copy the bucket policy generated during CloudFront setup.
+ Navigate to your S3 bucket and click on "Permissions."
+ Go to the S3 policy editor and paste the copied policy.
+ Save changes.
  
<img width="908" alt="policy" src="https://github.com/Kiran090303/ReferralBot/assets/98480971/deb1c1f5-a547-43df-be44-5ba05b0ccee8">

# Upload Video File
+ Upload the desired video file to the S3 bucket.

<img width="750" alt="upload" src="https://github.com/Kiran090303/ReferralBot/assets/98480971/282a807a-2253-46d5-95d8-15704e4d467d">

# Test the Video
+ Go to the AWS CloudFront service and copy the distribution domain from your created distribution.
  
<img width="209" alt="Screenshot 2024-01-08 175548" src="https://github.com/Kiran090303/ReferralBot/assets/98480971/c61060ce-68c2-432e-8bec-d3fbebcee93e">

+ Go to your S3 bucket, copy the video object name.

<img width="118" alt="Screenshot 2024-01-08 175614" src="https://github.com/Kiran090303/ReferralBot/assets/98480971/15e8f1c4-3593-4032-ab11-33217bd23e29">

+ Paste both the distribution domain and video object name into your browser bar to test the video.

<img width="939" alt="test" src="https://github.com/Kiran090303/ReferralBot/assets/98480971/ba330fcb-07d3-4089-9475-b49099fc4d4e">

+ Good work 80% of the hard work is already done, Now let's implement the frontend framework. The frontend of choice is the react framework to achieve the result.
