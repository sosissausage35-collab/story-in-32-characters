// Story in 32 Characters — entry for "Tell a Whole Story in 32 Characters"
// A complete human story in three beats:
//   beginning — "He left."  |  middle — "She cried."  |  end — "He returned!"
// Departure, grief, reunion: a whole arc in exactly 32 characters.
// No dependencies, fully deterministic: no randomness, no time, no network,
// no environment variables, no files read from outside this repository.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "He left. She cried. He returned!";
const OUTPUT_PATH = "/output/entry.txt";
const EXPECTED_LENGTH = 32;

function main(): void {
  if (ENTRY.length !== EXPECTED_LENGTH) {
    console.error(
      `Entry must be exactly ${EXPECTED_LENGTH} characters, got ${ENTRY.length}.`,
    );
    process.exit(1);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
  const roundTrip = readFileSync(OUTPUT_PATH, "utf8");
  if (roundTrip !== ENTRY) {
    console.error("Round-trip verification failed: file content differs from entry.");
    process.exit(1);
  }
  console.log(ENTRY);
}

main();
