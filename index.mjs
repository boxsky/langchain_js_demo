import * as dotenv from 'dotenv';
dotenv.config();

import { OpenAI} from "@langchain/openai";


const model = new OpenAI({
  model: "gpt-3.5-turbo", // Defaults to "gpt-3.5-turbo-instruct" if no model provided.
  temperature: 0.9,
  configuration: {
    baseURL: process.env.OPENAI_BASE_URL,
  },
});

console.log(model)
const res = await model.invoke(
  "谁是巴彦淖尔最美丽的女孩?"
);
console.log({ res });