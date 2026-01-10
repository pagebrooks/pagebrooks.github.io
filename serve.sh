#!/bin/bash

PORT=${1:-8000}

echo "Starting server at http://localhost:$PORT"
python3 -m http.server "$PORT"
