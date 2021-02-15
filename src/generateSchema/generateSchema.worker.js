import generateSchema from "./generateSchema.js";

onmessage = (e) => {
  postMessage(generateSchema(e.data));
};
