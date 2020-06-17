# docker-timezone-server
a simple timezone-lookup based on geo-tz in a docker container


Using the Timezone Lookup
-------------------------

```
docker run -p 80:3000 tobias74/timezone-lookup:latest
```

This exposes the timezone-lookup on your localhost on port 3000 and you can call it by

```
curl "localhost:3000/timezone?latitude=12&longitude=34"
```




