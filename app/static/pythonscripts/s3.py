import io
import boto3
import pandas as pd
import numpy as np
from config import *


class S3:
    env_vars = Configurations.get_config()
    # def s3_read_new(self):
    #     print('s3 - s3 read new')
    #     env_vars = Configurations().get_config2()
    #     s3 = boto3.resource(
    #         service_name='s3',
    #     #     region_name='eu-west-2',
    #         aws_access_key_id=env_vars['access_id'],
    #         aws_secret_access_key=env_vars['access_key']
    #     )
    #     # s3 = boto3.client('s3')
    #     bucket_name = 'thepubpicker'
    #     file_key = 'details.csv'
    #
    #     response = s3.get_object(Bucket=bucket_name, Key=file_key)
    #     csv_content = response['Body'].read().decode('utf-8')
    #     df = pd.read_csv(io.StringIO(csv_content))
    #
    #     # # Print out bucket names
    #     # for bucket in s3.buckets.all():
    #     #     print(bucket.name)
    #     #
    #     # client = boto3.client('s3')
    #     #
    #     # bucket_name = 'thepubpicker'
    #     #
    #     # object_key = 'details.csv'
    #     #     # 'my_file.csv'
    #     # csv_obj = client.get_object(Bucket=bucket_name, Key=object_key)
    #     # body = csv_obj['Body']
    #     # csv_string = body.read().decode('utf-8')
    #     #
    #     # df = pd.read_csv(StringIO(csv_string))
    #     # print(df)

    def s3_read(self, prefix, list_of_columns):
        # env_vars = Configurations().get_config2()
        s3 = boto3.resource('s3',
                            aws_access_key_id=self.env_vars['access_id'],
                            aws_secret_access_key=self.env_vars['access_key'])
        my_bucket = s3.Bucket(self.env_vars['bucket_name'])
        bucket_list = []

        for obj in my_bucket.objects.filter(Prefix=prefix):  # .all():
            if obj.key.find(".csv") != -1:
                bucket_list.append(obj.key)
        if len(bucket_list) == 1:
            list_of_objects = []  # Initializing empty list of dataframes
            for bucket in bucket_list:  # pubs.csv
                obj = s3.Object(self.env_vars['bucket_name'], bucket)
                data = obj.get()['Body'].read()
                list_of_objects.append(pd.read_csv(io.BytesIO(data), header=0, delimiter=",", low_memory=False))
            obj_df = pd.DataFrame(columns=list_of_columns)
            for obj in list_of_objects:
                temp_df = pd.DataFrame(data=obj)
                obj_df = pd.DataFrame(np.concatenate([obj_df.values, temp_df.values]), columns=obj_df.columns)
        else:
            obj_df = None
            print('error in processing')
        return obj_df

    def s3_write(self, upload_object: object, s3_obj_name: object) -> object:
        # client = None
        # env_vars = Configurations().get_config2()
        client = boto3.client("s3",
                              aws_access_key_id=self.env_vars['access_id'],
                              aws_secret_access_key=self.env_vars['access_key'])

        with io.StringIO() as csv_buffer:
            upload_object.to_csv(csv_buffer, index=False)
            response = client.put_object(Bucket=self.env_vars['bucket_name'],
                                         Key=s3_obj_name,
                                         Body=csv_buffer.getvalue())
            status = response.get("ResponseMetadata", {}).get("HTTPStatusCode")
            if status == 200:
                print(f"Successful {s3_obj_name} S3 put_object response. Status - {status}")
            else:
                print(f"Unsuccessful {s3_obj_name }S3 put_object response. Status - {status}")

        # s3_resp = client.head_object(Bucket=env_vars['bucket_name'], Key=s3_obj_name)

        return status

    def go_get_counter(self, prefix, list_of_columns):
        # env_vars = Configurations().get_config2()
        s3 = boto3.resource('s3',
                            aws_access_key_id=self.env_vars['access_id'],
                            aws_secret_access_key=self.env_vars['access_key'])
        my_bucket = s3.Bucket(self.env_vars['bucket_name'])
        bucket_list = []
        for obj in my_bucket.objects.filter(Prefix=prefix):  # .all():
            if obj.key.find(".csv") != -1:
                bucket_list.append(obj.key)
        if len(bucket_list) == 1:
            list_of_objects = []  # Initializing empty list of dataframes
            for bucket in bucket_list:  # pubs.csv
                obj = s3.Object(self.env_vars['bucket_name'], bucket)
                data = obj.get()['Body'].read()
                list_of_objects.append(pd.read_csv(io.BytesIO(data), header=0, delimiter=",", low_memory=False))
            obj_df = pd.DataFrame(columns=list_of_columns)
            # print(obj_df)
            for obj in list_of_objects:
                temp_df = pd.DataFrame(data=obj)
                # print(temp_df)
                obj_df = pd.DataFrame(np.concatenate([obj_df.values, temp_df.values]), columns=obj_df.columns)
                counter = obj_df["pub_counter"].values[0]
        else:
            obj_df = None
            counter = 0
            print('error in processing')
        return counter


    def go_write_counter(self, upload_object: object, s3_obj_name: object) -> object:
        # client = None
        # env_vars = Configurations().get_config2()
        client = boto3.client("s3",
                              aws_access_key_id=self.env_vars['access_id'],
                              aws_secret_access_key=self.env_vars['access_key'])
        with io.StringIO() as csv_buffer:
            upload_object.to_csv(csv_buffer, index=False)
            response = client.put_object(Bucket=self.env_vars['bucket_name'],
                                         Key=s3_obj_name,
                                         Body=csv_buffer.getvalue())
            status = response.get("ResponseMetadata", {}).get("HTTPStatusCode")
            if status == 200:
                print(f"Successful {s3_obj_name} S3 put_object response. Status - {status}")
            else:
                print(f"Unsuccessful {s3_obj_name}S3 put_object response. Status - {status}")

        # s3_resp = client.head_object(Bucket=env_vars['bucket_name'], Key=s3_obj_name)

        return status
