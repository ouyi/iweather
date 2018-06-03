
    ionic start iweather tabs --no-git
    ionic serve

    ionic g page settings
    app.module.ts
    tabs.ts
    tabs.html

    rm src/pages/settings/settings.module.ts 
    Remove `@IonicPage()` from src/pages/settings/settings.ts

    ionic cordova platform add browser
    ionic build --prod
