from flask import Flask
from flask import jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
import gridfs

api = Flask(__name__)
CORS(api);

client = MongoClient("mongodb+srv://babyrin:nQZ3NVmb9WDonf8m@cluster0.wtixx.mongodb.net/?retryWrites=true&w=majority");
db = client.test;
fs = gridfs.GridFS(db);


@api.route('/upload', methods=["POST"])
def upload_file():
    if 'file' not in request.files:
        print("no file uploaded")
        return 'No file uploaded', 400

    file = request.files['file']
    if file.filename == '':
        print("empty name")
        return 'No file selected', 400

    # Process the file here, for example save it to disk
    # file.save('path/to/save/file')
    fs.put(file, filename=file.filename);
    return 'File uploaded successfully', 200