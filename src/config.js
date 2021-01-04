const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-upload-travster217",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://feh75699s2.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_WwETA5TK0",
    APP_CLIENT_ID: "5n1naimh4cbv461jusbm36t49o",
    IDENTITY_POOL_ID: "us-east-2:b5c66fb9-9dd9-4828-9ac7-97ff962752d2",
  },
};

export default config;