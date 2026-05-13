#!/usr/bin/env bash
set -euo pipefail

REMOTE_URL="https://github.com/AnthonyBarbaro/goldenbagel.git"

if [ ! -d ".git" ]; then
  git init
fi

git branch -M main

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "${REMOTE_URL}"
else
  git remote add origin "${REMOTE_URL}"
fi

git remote -v

if ! git diff --cached --quiet; then
  git commit -m "chore: scaffold Golden Bagel static site"
fi

git push -u origin main || git push origin main
