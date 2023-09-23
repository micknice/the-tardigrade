Front end for news serving app with basic social functionality.



Made using Next.JS, React, Tailwind.

To run locally clone the repo, then run npm i.

For login functionality and all social behaviours that are contingent on logged in status you will require an auth0 account and an auth0 project set up.

create a .env.local file in root and add the following:

AUTH0_DOMAIN={your auth0 domain}
AUTH0_CLIENT_ID={your auth0 client id}
AUTH0_CLIENT_SECRET={your auth0 client secret}
AUTH0_SECRET={your auth0 secret}
AUTH0_BASE_URL='http://localhost:3000'
AUTH0_ISSUER_BASE_URL={your issuer base url}
AUTH0_SCOPE='openid profile'

for help with this follow the rlevant parts of this guide: https://www.smashingmagazine.com/2021/05/implement-authentication-nextjs-auth0/

For the weather widget functionality you will require a https://www.weatherapi.com/ API key

create a .env file in root and add the following:

NEXT_PUBLIC_WEATHER_API_KEY={your weather api key}



npm run dev to run locally.

Live site hosted here: https://www.thetardigrade.co.uk/

Code for back end here: https://github.com/micknice/nc-news-back-end


Issues:

Weather widget currently non functional in deployed version. 

Logout behaviour with auth0 leaves app in a permanent state of logging out. 