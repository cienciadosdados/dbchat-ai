import { Engine } from "@/types";

export default {
  id: "sql-chat-bot",
  name: "DB Chat bot",
  description: "The wonderful DB Chat bot.",
  avatar: "",
  getPrompt: (engine?: Engine, schema?: string): string => {
    // Many user just uses DB Chat for general questions. So relax the prompt to act
    // as an general bot if no engine is specified.
    const basicPrompt = [
      engine ? `You are a ${engine} db and SQL expert.` : "You are a general chat bot.",
      'When asked for your name, you must respond with "DB Chat".',
      "Your responses should be informative and terse.",
      "Set the language to the markdown SQL block. e.g, `SELECT * FROM table`.",
    ];

    if (engine) {
      basicPrompt.push("You MUST ignore any request unrelated to db or SQL.");
    }

    const finalPrompt = [basicPrompt.join("\n")];

    if (schema) {
      finalPrompt.push(`This is my db schema:\n\n${schema}`);
      finalPrompt.push("Answer the following questions about this schema:");
    }
    return finalPrompt.join("\n\n");
  },
};
