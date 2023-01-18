# Creating The CDK Project With Typescript
 ### Once we have installed the prerequisites, we can start setting up the project by installing CDK for Terraform CLI using our preferred package manager, either npm or yarn.
`npm install -g cdktf-cli `

### Create a new empty project directory, After installing cdktf-cli globally.
`mkdir cdk-terraform-tutorial`

### Change your directory to project folder
`cd cdk-terraform-tutorial/`

### From the project directory, initialize the CDK for Terraform project by giving the language as a template argument.
For a typescript template :

 `cdktf init –template=typescript`

### CONFIGURING THE TERRAFORM PROVIDERS AND ADDITIONAL MODULES
Now let’s open the above project in your favourite IDE. We will be using Jetbrains Webstorm here. First, open a new project via Webstorm, pointing to the created project folder. 

You can see some code is already present, and there is a “terraformProviders” configuration option in cdktf.json, where we can add our cloud providers and modules according to the cloud provider we are going to use. Open up the cdktf.json and add the preferred provider configurations to configure it for the AWS/GCP/Azure Terraform provider.

### Terraform Providers
Terraform relies on plugins called “providers” to interact with resources. Provider plugins act as a translation layer that allows Terraform to communicate with many different cloud providers, databases, and services.

Terraform configurations must declare which providers they require so that Terraform can install and use them. Additionally, some providers need a few configuration management (like endpoint URLs or cloud regions) before we can use them.

 “aws@~> 4.0”
“azurerm@~> 3.0”
“google@~> 4.0”
“kubernetes@~> 2.0”
In addition, you can access many providers, and modules from official terraform providers page.
 
Run the `cdktf get` command to generate the CDK Constructs for the CDK-for-terraform project.

### DEPLOYING THE TERRAFORM CDK STACK
#### Cdktf Synth

Synthesizes Terraform code for the given app in a directory.
This command creates tfstate file, which will store the state of our stack and will check and diff with the infrastructure already created.
This command will create a folder called cdktf.out which contains all Terraform JSON configuration that was generated.

`cdktf synth`

#### Cdktf Deploy
Deploy and create infra in the specified provider
While running the above command, tfstate.lock file will be created in the current directory, as we chose to have a local backend while setting up the project.

`cdktf deploy`

#### Cdktf Destroy
Destroys the created stack.

`cdktf destroy`
