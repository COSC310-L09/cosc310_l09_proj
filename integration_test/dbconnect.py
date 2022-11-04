from azure.storage.blob import BlobServiceClient

# Suyash Test Storage Account
# storage_account_key = "LrvprRDgawKe/BP2CeUNCVWkIs71rUpBXNJ5ImLX36KMq8FjikWGkd+EGRyBIw/RqUS2+DnxANCK+AStElJ1yQ=="
# storage_account_name = "team19cosc310"
# connection_string = "DefaultEndpointsProtocol=https;AccountName=team19cosc310;AccountKey=hPwSz0XKgK3J/ucERwMoLCL2dPoOFS7eMSPYbMXhQe5uNzaSQ+ZcxBoJsDacc8uZE+3hhgswJKke+AStc92VJg==;EndpointSuffix=core.windows.net"
# container_name = "testcontainer"

# Ramos Test Storage Account
# storage_account_key = "vXO7jfFxPEMHujyKRX6WPGzdKKV8PL2kYkhoZ8J9TVqxzJ7Tc9LJkb1JfJNKfld5RJTj1hNQjgqN+AStned9sg=="
# storage_account_name = "cosc310testupload"
# connection_string = "DefaultEndpointsProtocol=https;AccountName=cosc310testupload;AccountKey=N4Qid5pQMbhDYLJLfxHbDdEpa7zLKMidTSVAhVEo9rY/n1Pz1ytg1vQpi3K+DjCKO+J8LQb+LFU2+AStRHwIjw==;EndpointSuffix=core.windows.net"
# container_name = "test-file-system"

def uploadToBlobStorage(file_path,  file_name):
  blob_service_client = BlobServiceClient.from_connection_string(connection_string)
  blob_client = blob_service_client.get_blob_client(container=container_name, blob=file_name)
  
  with open(file_path, "rb") as data:
    blob_client.upload_blob(data)
  print(f'Uploaded {file_name}.')

