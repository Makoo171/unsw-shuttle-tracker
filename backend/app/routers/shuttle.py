from fastapi import APIRouter
from typing import List, Dict

router = APIRouter()

# Temporary in-memory "feed" for demo
_FAKE_STOPS = [
    {"id": "unsw_gate9", "name": "UNSW Gate 9", "lat": -33.917, "lng": 151.231},
    {"id": "anzac_parade", "name": "Anzac Parade Stop", "lat": -33.918, "lng": 151.228},
]

_FAKE_VEHICLES = [
    {"id": "bus_01", "route": "Gate9 -> Anzac", "lat": -33.9178, "lng": 151.2295, "eta_min": 4},
    {"id": "bus_02", "route": "Anzac -> Gate9", "lat": -33.9170, "lng": 151.2301, "eta_min": 7},
]

@router.get("/stops")
def list_stops() -> List[Dict]:
    """List known stops (placeholder)."""
    return _FAKE_STOPS

@router.get("/vehicles")
def list_vehicles() -> List[Dict]:
    """List vehicle positions (placeholder)."""
    return _FAKE_VEHICLES