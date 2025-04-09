from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World, from FastAPI!"}
@app.get("/health")
async def health():
    return {"status": "healthy"}
@app.get("/info")
async def info():
    return {
        "name": "FastAPI Example",
        "version": "1.0.0",
        "description": "A simple FastAPI application for demonstration purposes.",
    }
