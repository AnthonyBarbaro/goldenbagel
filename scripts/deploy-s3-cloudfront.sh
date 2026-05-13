#!/usr/bin/env bash
set -euo pipefail

: "${S3_BUCKET_NAME:?S3_BUCKET_NAME is required}"
: "${CLOUDFRONT_DISTRIBUTION_ID:?CLOUDFRONT_DISTRIBUTION_ID is required}"
: "${AWS_REGION:?AWS_REGION is required}"

npm run build

if [ ! -d "out" ]; then
  echo "Static export folder out/ was not generated." >&2
  exit 1
fi

aws s3 sync out/ "s3://${S3_BUCKET_NAME}/" --delete --region "${AWS_REGION}"
aws cloudfront create-invalidation \
  --distribution-id "${CLOUDFRONT_DISTRIBUTION_ID}" \
  --paths "/*" \
  --region "${AWS_REGION}"
