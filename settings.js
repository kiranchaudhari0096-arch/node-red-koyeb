module.exports = {
  uiPort: process.env.PORT || 3000,
  uiHost: "0.0.0.0",
  httpAdminRoot: "/",
  httpNodeRoot: "/api",
  userDir: "/root/.node-red",
  flowFile: "flows.json",
  credentialSecret: "my-secret-key",
  functionGlobalContext: {}
};
