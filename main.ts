import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import {AwsProvider} from './.gen/providers/aws/provider';
import {S3Bucket} from './.gen/providers/aws/s3-bucket';




class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
    new AwsProvider (this, "aws", {
      region: "us-east-1",
    });

    new S3Bucket (this, "s3", {
      bucket: "s3-sadi",
    });



  }
}

const app = new App();
new MyStack(app, "cdk-terraform-tutorial");
app.synth();
