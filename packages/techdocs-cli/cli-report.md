## CLI Report file for "@techdocs/cli"

> Do not edit this file. It is a report generated by `yarn build:api-reports`

### `techdocs-cli`

```
Usage: techdocs-cli [options] [command]

Options:
  -V, --version
  -h, --help

Commands:
  generate|build [options]
  help [command]
  migrate [options]
  publish [options]
  serve [options]
  serve:mkdocs [options]
```

### `techdocs-cli generate`

```
Usage: techdocs-cli generate|build [options]

Options:
  --defaultPlugin [defaultPlugins...]
  --docker-image <DOCKER_IMAGE>
  --etag <ETAG>
  --legacyCopyReadmeMdToIndexMd
  --no-docker
  --no-pull
  --omitTechdocsCoreMkdocsPlugin
  --output-dir <PATH>
  --runAsDefaultUser
  --site-name
  --source-dir <PATH>
  --techdocs-ref <HOST_TYPE:URL>
  -h, --help
  -v --verbose
```

### `techdocs-cli migrate`

```
Usage: techdocs-cli migrate [options]

Options:
  --awsEndpoint <AWS ENDPOINT>
  --awsRoleArn <AWS ROLE ARN>
  --awsS3ForcePathStyle
  --azureAccountKey <AZURE ACCOUNT KEY>
  --azureAccountName <AZURE ACCOUNT NAME>
  --concurrency <MAX CONCURRENT REQS>
  --osAuthUrl <OPENSTACK SWIFT AUTHURL>
  --osCredentialId <OPENSTACK SWIFT APPLICATION CREDENTIAL ID>
  --osSecret <OPENSTACK SWIFT APPLICATION CREDENTIAL SECRET>
  --osSwiftUrl <OPENSTACK SWIFT SWIFTURL>
  --publisher-type <TYPE>
  --removeOriginal
  --storage-name <BUCKET/CONTAINER NAME>
  -h, --help
  -v --verbose
```

### `techdocs-cli publish`

```
Usage: techdocs-cli publish [options]

Options:
  --awsBucketRootPath <AWS BUCKET ROOT PATH>
  --awsEndpoint <AWS ENDPOINT>
  --awsMaxAttempts <AWS MAX ATTEMPTS>
  --awsProxy <HTTPS Proxy>
  --awsRoleArn <AWS ROLE ARN>
  --awsS3ForcePathStyle
  --awsS3sse <AWS SSE>
  --azureAccountKey <AZURE ACCOUNT KEY>
  --azureAccountName <AZURE ACCOUNT NAME>
  --directory <PATH>
  --entity <NAMESPACE/KIND/NAME>
  --gcsBucketRootPath <GCS BUCKET ROOT PATH>
  --legacyUseCaseSensitiveTripletPaths
  --osAuthUrl <OPENSTACK SWIFT AUTHURL>
  --osCredentialId <OPENSTACK SWIFT APPLICATION CREDENTIAL ID>
  --osSecret <OPENSTACK SWIFT APPLICATION CREDENTIAL SECRET>
  --osSwiftUrl <OPENSTACK SWIFT SWIFTURL>
  --publisher-type <TYPE>
  --storage-name <BUCKET/CONTAINER NAME>
  -h, --help
```

### `techdocs-cli serve`

```
Usage: techdocs-cli serve [options]

Options:
  --docker-entrypoint <DOCKER_ENTRYPOINT>
  --docker-option <DOCKER_OPTION...>
  --mkdocs-parameter-clean
  --mkdocs-parameter-dirtyreload
  --mkdocs-parameter-strict
  --mkdocs-port <PORT>
  --no-docker
  --preview-app-bundle-path <PATH_TO_BUNDLE>
  --preview-app-port <PORT>
  --site-name
  -c, --mkdocs-config-file-name <FILENAME>
  -h, --help
  -i, --docker-image <DOCKER_IMAGE>
  -v --verbose
```

### `techdocs-cli serve:mkdocs`

```
Usage: techdocs-cli serve:mkdocs [options]

Options:
  --docker-entrypoint <DOCKER_ENTRYPOINT>
  --docker-option <DOCKER_OPTION...>
  --no-docker
  --site-name
  -h, --help
  -i, --docker-image <DOCKER_IMAGE>
  -p, --port <PORT>
  -v --verbose
```
