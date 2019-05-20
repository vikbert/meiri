#!/usr/bin/env sh
set -e

### this will build the md fiels into html static pages, then publish htmls to gh-pages branch
yarn build
cd build

git init
git add -A

DATE=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "deploy: github gh-pages $DATE"

git push -f https://github.com/vikbert/meiri.git master:gh-pages

cd -
git pull
