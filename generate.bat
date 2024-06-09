@echo off
cd generator
bun install && bun run . > ../types.ts
