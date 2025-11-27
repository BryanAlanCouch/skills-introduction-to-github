#!/bin/bash

# IdentAgent.me - Deployment Automation Script
# This script initializes a git repo, adds all files, and pushes to main.

echo "🚀 Starting deployment process for IdentAgent.me..."

# 1. Initialize Git (if not already done)
if [ ! -d ".git" ]; then
  echo "📂 Initializing new Git repository..."
  git init
else
  echo "📂 Git repository already initialized."
fi

# 2. Add all files
echo "➕ Adding all files to staging..."
git add .

# 3. Commit changes
echo "💾 Committing changes..."
# You can change the commit message here if you want
git commit -m "Update: Enhancing the Alpha-MVP-Omega Masterpiece"

# 4. Push to GitHub
# NOTE: Ensure you have added your remote origin before running this script for the first time:
# git remote add origin https://github.com/YOUR_USERNAME/identagent-platform.git
echo "⬆️ Pushing to GitHub main branch..."
git push -u origin main

echo "✅ Deployment script finished."
