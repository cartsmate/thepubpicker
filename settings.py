from os import environ

# HEROKU_GOOGLE_API=AIzaSyCbb6tdoROEQuBKLZXybG5cNIB4UTc6A20
# ACCESS_ID=AKIAUNBYSFXT5T2V7GHL
# ACCESS_KEY=x0EZdhPYFbHWq7wjTmwb1usrI5Y7xrOw+5Kb1Tvm
# BUCKET_NAME=s3-git-20221219-pubs

google_key = environ.get("HEROKU_GOOGLE_API")
access_id = environ.get("ACCESS_ID")
access_key = environ.get("ACCESS_KEY")
bucket_name = environ.get("BUCKET_NAME")
