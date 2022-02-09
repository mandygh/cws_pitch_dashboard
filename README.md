# CWS play dashboard

## Project setup
You can use one of these options to run the application. Don't forget use sudo privileges if need it.
### Option 1. Docker (Recommended).
As a prerequisite, you need to install [Docker](https://docs.docker.com/get-docker/) You can choose the installation that best suits you.
With docker installed, go the root folder and run the following commands:

```sh
docker build -t vue-whitesox/docker-vue-wsox .
docker run -it -p 8080:8080 --rm --name wsox-dashboard-test vue-whitesox/docker-vue-wsox
```
**Note:** If you need to use a different port, just change 8080:8080 in the way {port}:{port}. Example 8081:8081

### Option 2. Development mode.
If you have Vue and all requirements including node, npm,etc., You just need to run:
```sh
npm install
npm run serve
```

## Notes
 - `Vue 3` was used as JS Framework
 - External API like `statsApi` were used
 - The stadium image does not represent the true dimensions of the park.
 - All the data including visualizations(Players position, ball trajectory, pitch location) are extracted, transformed and represented automatically from the API's. So if we use the same data structure with a different play, we can represent the information as well

