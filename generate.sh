git clone --depth 1 https://github.com/LunarTides/Hearthstone.js
cd Hearthstone.js

npm i
npx tsc
npm run script:vanilla:generate-no-filter
npm run script:vanilla:propfinder > ../generated.txt
