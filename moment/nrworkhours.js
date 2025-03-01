"use strict";

/**
 * Checks if the given timestamp falls within working hours (9:00-18:00).
 * @param {Object} msg - Node-RED message object.
 * @param {Object} node - Node instance.
 * @returns {Object|null} - Updated message object or null on error.
 */
function checkWorkingHours(msg, node) {
  const inputKey = node.input_key || "timestamp";
  const outputKey = node.output_key || "in_working_hours";

  if (!msg.hasOwnProperty(inputKey)) {
    node.error("Missing timestamp input", msg);
    return null;
  }

  const timestamp = new Date(msg[inputKey]);
  if (isNaN(timestamp)) {
    node.error("Invalid timestamp", msg);
    return null;
  }

  const hours = timestamp.getHours();
  msg[outputKey] = hours >= 9 && hours < 18;
  return msg;
}

module.exports = function (RED) {
  function WorkingHoursCheckNode(config) {
    RED.nodes.createNode(this, config);
    const node = this;

    node.input_key = config.input_key || "timestamp";
    node.output_key = config.output_key || "in_working_hours";

    node.on("input", function (msg, send, done) {
      const result = checkWorkingHours(msg, node);
      if (result) {
        send(result);
      }
      done();
    });
  }

  RED.nodes.registerType("working-hours-check", WorkingHoursCheckNode);
};