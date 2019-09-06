# newstart
Microsite initially for the  2017 library fine amnesty program, you know, for kids!

Since then, it has become a microsite for supporting NYC schools through the NYC libraries.

## Local Development

### Installation
Clone this repo and then run `npm install` at the root to install node packages. This is useful if you are going to run gulp to compile `scss` into `css`.

### Folder Structure
There are currently two directories corresponding to two pages within this site, `newstart/` and `schools/`. Both directories contain their own `css`, `img`, and `js` files. Making a change to a file in one directory will not update the other directory. This also includes the main `css` folder which is located at the root of this repo.

### SCSS
There is a gulp file in this repo that is mainly used to compile `scss` into `css`. The latest update will compile the css into the `css`, `newstart/css`, and `schools/css` folders. This means that the code is shared, though not optimized right now.

## Developer Workflow
There are currently four main branches:
`master`, `developement`, `qa`, `production`

New changes should be made on the `master` branch. Then the merge workflow should be as follows:

`master` -> `development` -> `qa` -> `production`

## AWS S3 Buckets
There are currently two AWS S3 buckets in NYPL's production account. Those S3 buckets will serve the site and also configure the main folder to be redirected to.

### Production Redirect
Once permission is granted on the AWS account, in the "overview" for the bucket, select the `index.html` file in the root directory. Go to the `Properties` tab and under `Metadata` updated the `Website-Redirect-Location` to the updated directory or file.

## Working with NYPL Marketing
The content changes are created by Marketing and they have a document for a workflow to commit to this repo: [New Start - GitHub Instructions for Mktg](https://docs.google.com/document/d/1LvHzLg7vKbC9TOj39SB7pjHoRhhLaXKFvmSkeBQO2Sc/edit) (you may need to request access). Currently, the workflow is for them to commit to the `qa` branch and then deploy to production. This steps around the developer's workflow but shouldn't be a problem if `qa` is merged back into `master`. Ideally, a better process will be defined later. Make sure that changes committed by Marketing are also updated in the appropriate `scss` files.

## Deploying
Travis CI does all the work! When new changes are pushed, Travis will deploy to the appropriate S3 bucket defined in the `.travis.yml` file. The `qa` branch will deploy to the QA S3 bucket and the `production` branch will deploy to the production S3 bucket.
