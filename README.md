# Cats As a Service 🐱

## Submitting to Serverless Apps Repo

1. `sam local start-api`: Test Locally

1. Apply S3 Bucket Policy to `sanathkr-test` bucket. See [Docs](https://docs.aws.amazon.com/serverlessrepo/latest/devguide/serverless-app-publishing-applications.html)

1. `sam package --template-file template.yaml --s3-bucket sanathkr-test --output-template-file packaged.yaml`

1. `sam deploy --template-file /Users/sanathkr/Desktop/cats/output.yaml --stack-name cats-demo --capabilities CAPABILITY_IAM`

1. `git push origin master`

1. Go to [https://console.aws.amazon.com/serverlessrepo](https://console.aws.amazon.com/serverlessrepo
) and follow instructions to publish. NOTE: Upload the packaged template

1. Make app public by clicking on the toggle

1. Go to [https://console.aws.amazon.com/lambda/home?region=us-east-1#/create
](https://console.aws.amazon.com/lambda/home?region=us-east-1#/create
)