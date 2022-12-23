PROJECTID=sommerlekene
VERSION=v2.16.1-ce

gcloud run deploy hasura-prod \
  --image=gcr.io/$PROJECTID/hasura/graphql-engine:$VERSION \
  --project=$PROJECTID \
  --region=europe-north1 \
  --env-vars-file=env.production.yaml \
  --allow-unauthenticated \
  --max-instances=1 \
  --cpu=1 \
  --memory=512Mi \
  --port=8080