const dev = {
  STRIPE_KEY: "pk_test_E7OYatBDLlr5Q8mE95tAO35K",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-blja9u141wlz"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://c8ia8hef63.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_pfTPjMft0",
    APP_CLIENT_ID: "7q10k4b6ntvq3a67fjdn1k3ibl",
    IDENTITY_POOL_ID: "us-east-1:c7fec469-4fbb-46e6-baf3-f513888ccfb7"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_E7OYatBDLlr5Q8mE95tAO35K",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1q45nvfzudbxb"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://px0lpjtf5b.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_k4KET61JE",
    APP_CLIENT_ID: "31p3e669lfc3ij8q463em60rg4",
    IDENTITY_POOL_ID: "us-east-1:c952c6ee-5b06-4a8b-b5a2-1de30d803a1c"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;