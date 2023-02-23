from fastapi import FastAPI, status
from fastapi.middleware.cors import CORSMiddleware
import os
from pymongo import MongoClient
from src.radarBuild import find_files

comms = FastAPI()

origins = ["*"]

comms.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
)

list_of_links = find_files("http://doppler.cs.umass.edu/roost/img/")


MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI, 27017)
db = client["roost_db"]
bird_files = db["bird_files"] # Create collection for bird files
bird_boxes = db["bird_boxes"] # Create collection for bounding boxes

# http://doppler.cs.umass.edu/roost/img/all_stations_v1/vr05/1997/07/02/KBUF/KBUF19970702_091359.png

@comms.get("/")
async def root():
    return {"detail": "Roost Backend is Running!"}

@comms.get("/test_db_entry")
def get_test_db_entry():
    file_name: str = "testfile.png"
    bird_file_name = bird_files.find_one({"file_name": file_name}, {"_id": 0})
    return bird_file_name

@comms.get("/add_db_entry")
def add_test_db_entry():
    file_name: str = "testfile.png"
    bird_files.insert_one({"file_name": file_name, "file_metadata": "foo"})
    return {"detail": "Success! Test Bird Created!"}