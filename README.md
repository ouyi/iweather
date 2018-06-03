
    ionic start iweather tabs --no-git
    ionic serve

    ionic g page settings
    app.module.ts
    tabs.ts
    tabs.html

    ionic cordova platform add browser
    ionic build --prod

    cat .gitignore
    node_modules/
    .sourcemaps/
    platforms/
    plugins/
    www/

    cp -R www/* .
    git add .
    git commit -m "Add everything for hosting"
    git push origin gh-pages
