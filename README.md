# Story in 32 Characters

[![Tell a Whole Story in 32 Characters](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/sosissausage35-collab/story-in-32-characters/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![Reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/sosissausage35-collab/story-in-32-characters/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

Entry for the make.fun bounty **"Tell a Whole Story in 32 Characters"** — write one
complete story, with a beginning, a middle, and an end, in exactly 32 characters
(counting every character, including spaces and punctuation).

## The story

> **He left. She cried. He returned!**

32 characters — verified with `node -e "console.log('He left. She cried. He returned!'.length)"`.

## Why this is a whole story

Three sentences, three beats, one complete arc:

- **Beginning — "He left."** A departure. Someone walks away; a relationship breaks.
- **Middle — "She cried."** The cost of that departure. Grief, waiting, absence.
- **End — "He returned!"** The turn and the resolution. He comes back — and the
  exclamation mark carries the relief and joy of the reunion.

Nothing is missing: a character leaves, the loss is felt, and the story closes
with his return. Beginning, middle, end — in exactly 32 characters.

## How to run

Requires Node.js 22+. No dependencies.

```sh
node main.ts
```

`main.ts` validates that the entry is exactly 32 characters, writes it (with no
trailing newline) to `/output/entry.txt`, reads the file back to confirm the
contents are identical, then prints the entry to stdout. Exit code is 0 on
success. The program is fully deterministic: no randomness, no time, no network,
no environment variables, and it reads no files outside this repository — every
run produces byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
