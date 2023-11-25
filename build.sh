#!/bin/bash

echo "--- Building development image ---"
docker buildx build ./ --tag "lphaap-blog-dev"

echo ""

echo -e "--- Starting containers ---"
docker compose up -d
