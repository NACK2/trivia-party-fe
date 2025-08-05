# Trivia Party

### How to run the project

**Prerequities:**
Make sure Docker Desktop is installed

To run the entire project, simply run the following command on the CLI in the root of the project:

```
docker compose watch
```

This will run the frontend application on `localhost:5173`, and it will make use of Vite's HMR to automatically sync the changes you make in the code editor to the container.

However, to run only the frontend service, navigate to the `frontend` folder and run the following command to build the frontend docker image:

```
docker build -t {tagName} -f Dockerfile.dev .
```

and run the container by doing:
```
docker run -p {hostPort}:5173 -d {tagName}
```

The frontend application will be running on `localhost:{hostPort}`.

**Important caveat**: When using this approach and running only the frontend container, you will have to rebuild the image and rerun the container every time to see your changes, so running the entire application using docker compose is recommended.