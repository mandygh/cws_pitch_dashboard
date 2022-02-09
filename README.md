# CWS play dashboard

## Project setup
### Option 1. Docker (Recommended).
As a prerequisite, you need to install `Docker`. You can choose the installation that best suits you, here: https://docs.docker.com/get-docker/.
With docker installed, go the root folder and run the following commands:

```sh
docker build -t vue-whitesox/docker-vue-wsox .
docker run -it -p 8080:8080 --rm --name wsox-dashboard-test vue-whitesox/docker-vue-wsox
```

### Option 2. Development mode.
If you have VUE and all requirements including node, npm,etc., You just need to run:
```sh
npm install
npm run serve
```

## Notes
 - `Vue 3` was used as JS Framework
 - External API like `statsApi` were used
 - The stadium image does not represent the true dimensions of the park.
 - All the data including visualizations(Players position, ball trajectory, pitch location) are extracted, transformed and represented automatically from the API's. So if we use the same data structure with other play, we can represent the information

