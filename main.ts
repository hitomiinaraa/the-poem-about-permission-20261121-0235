// The poem about permission — v2 entry program.
// Writes one short poem about agency to /output/entry.txt.
// Node 22 stdlib only, no network, fully deterministic: the same bytes every run.
//
// The poem (v2, "The knock"): the asking itself is the act of agency.
// A speaker rehearses a knock for years, then learns the door was never
// locked — the asking was the lock, and their own hand held the key.
// One sustained image (door / knock / folded letter / key), no list;
// the insight is discovered through the scene rather than stated.
// v1 scored 0.8834 (#184); v2 answers it by putting the ask, not the
// reclaim, at the centre — the half of agency v1 never touched.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `I stood outside the door for years,
rehearsing the knock, the words, the face,
the question folded in my coat
like a letter I was afraid to send.
This morning I knocked.
The door was never locked.
The asking was the lock.
My own hand held the key.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
