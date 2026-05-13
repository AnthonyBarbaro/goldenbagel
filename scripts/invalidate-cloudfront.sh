#!/usr/bin/env bash
set -euo pipefail

: "${CLOUDFRONT_DISTRIBUTION_ID:?CLOUDFRONT_DISTRIBUTION_ID is required}"
: "${AWS_REGION:?AWS_REGION is required}"

aws cloudfront create-invalidation \
  --distribution-id "${CLOUDFRONT_DISTRIBUTION_ID}" \
  --paths "/*" \
  --region "${AWS_REGION}"
