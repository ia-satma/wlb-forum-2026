#!/usr/bin/env bash
set -euo pipefail

for file in out/WLB-Forum-2026-*.mp4; do
  echo "--- ${file}"
  ffprobe -v error -show_entries format=duration:stream=codec_name,codec_type,width,height,r_frame_rate -of default=noprint_wrappers=1 "${file}"
done
