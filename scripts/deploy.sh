#!/bin/bash

# Manual deploy script for Vercel
# Use this if automatic GitHub deployment fails

set -e

echo "Building project..."
npm run build

echo ""
echo "Deploying to Vercel production..."
vercel --prod

echo ""
echo "Deploy complete!"
