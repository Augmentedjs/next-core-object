/**
 * A set of configuration properties for the framework
 * @enum Configuration
 * @property {string} LoggerLevel The level of the framework internal logger
 * @property {string} MessageBundle - the base name for messages in the framework (default: Messages)
 * @property {number} AsynchronousQueueTimeout the default milisecond timeout (default: 2000)
 * @property {number} ApplicationInitProcessTimeout the application init even timeout (default: 1000)
 */
const Configuration = {
  LoggerLevel: "error",
  MessageBundle: "Messages",
  AsynchronousQueueTimeout: 2000,
  ApplicationInitProcessTimeout: 1000
};

export default Configuration;
