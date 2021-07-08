import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const myBucket01 = new s3.Bucket(this, 'myBucket', {
      bucketName: "smcmahon-my-cdk-bucket01",
      versioned: true
    });
  }
}
