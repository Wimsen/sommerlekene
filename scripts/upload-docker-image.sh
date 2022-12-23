PROJECTID=sommerlekene
VERSION=v2.16.1-ce

docker pull hasura/graphql-engine:$VERSION --platform linux/amd64
docker tag hasura/graphql-engine:$VERSION gcr.io/$PROJECTID/hasura/graphql-engine:$VERSION
docker push gcr.io/$PROJECTID/hasura/graphql-engine:$VERSION