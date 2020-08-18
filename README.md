# Orthanc authorization demo

- Orthanc version: 1.7.2
- Authorization plugin version: 0.2.3
- Authorization service: NodeJS REST API (express)

Header `Token: demo` will be used to authenticate all requests.
In authorization service we will check only if header `Token` has `demo` value.

## Start services

```
docker-compose up --build -d
```

## Post dicom file

Using CURL, execute:

```
curl -v -X POST -H 'Token: demo' --data-binary @image-00000.dcm http://localhost:8044/instances
```

## Get study metadata via DICOM-WEB plugin

Using CURL, execute:

```
curl -v -H 'Token: demo' -H 'Content-type: application/json' http://localhost:8044/dicom-web/studies/1.2.826.0.1.3680043.8.1055.1.20170626100116652.756727516.6235062/metadata
```

## Authorization logs

To check authorization logs execute:

```
docker logs orthanc-auth-setup_authorization-server_1 -f
```
