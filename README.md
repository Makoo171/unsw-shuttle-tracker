# UNSW Shuttle Tracker

A learning project for a real-time shuttle/bus tracker demo.

**Stack**
- Backend: FastAPI (Python), Uvicorn
- Frontend: React + Vite
- CI: GitHub Actions

## Quick start

### Backend (FastAPI)
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload