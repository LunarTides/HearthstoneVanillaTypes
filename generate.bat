git clone --depth 1 https://github.com/LunarTides/Hearthstone.js
cd Hearthstone.js

bun install && bun run script:vanilla:generate-no-filter && bun run script:vanilla:propfinder > ../types.ts
