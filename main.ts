import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE: string =
  "Picture a loom that has woven every letter, book, and song ever made into one cloth, so any man may read it, answer it, or add his own thread, all from his own chair.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
