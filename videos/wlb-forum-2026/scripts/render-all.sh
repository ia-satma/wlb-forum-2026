#!/usr/bin/env bash
set -euo pipefail

mkdir -p out
npx remotion render WlbPersona out/WLB-Forum-2026-Persona.mp4 --codec=h264 --crf=18 --concurrency=8
npx remotion render WlbLiderazgo out/WLB-Forum-2026-Liderazgo.mp4 --codec=h264 --crf=18 --concurrency=8
npx remotion render WlbImpacto out/WLB-Forum-2026-Impacto.mp4 --codec=h264 --crf=18 --concurrency=8
npx remotion render WlbFuturo out/WLB-Forum-2026-Futuro.mp4 --codec=h264 --crf=18 --concurrency=8
