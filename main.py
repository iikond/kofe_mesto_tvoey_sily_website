from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import json
 
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
 
@app.get("/")
def root():
    return FileResponse("templates/index.html")

@app.get("/api/menu")
def menu():
    with open("data/menu.json", encoding="utf-8") as f:
        return json.load(f)