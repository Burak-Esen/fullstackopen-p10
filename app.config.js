import 'dotenv/config';

const config = {
  "name": "rate-repository-app",
  "slug": "rate-repository-app",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/icon.png",
  "splash": {
    "image": "./assets/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "updates": {
    "fallbackToCacheTimeout": 0
  },
  "assetBundlePatterns": [
    "**/*"
  ],
  "ios": {
    "supportsTablet": true
  },
  "web": {
    "favicon": "./assets/favicon.png"
  },
  extra: {
    env: process.env.ENV,
    APOLLO_URI: ''
  }
};

if (process.env.ENV==='development') {
  config.extra.APOLLO_URI = process.env.APOLLO_URI;
}

export default config;