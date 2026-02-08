from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import shuttle

app = FastAPI(title="UNSW Shuttle Tracker API", version="0.1.0")

# Allow local dev front-end
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["root"])
def root():
    return {"status": "ok", "service": "unsw-shuttle-tracker"}

# Mount feature routers
app.include_router(shuttle.router, prefix="/api/shuttle", tags=["shuttle"])