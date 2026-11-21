// The poem about permission — entry program.
// Writes one short poem about agency to /output/entry.txt.
// Node 22 stdlib only, no network, fully deterministic: the same bytes every run.
//
// The poem (214 Unicode code points, inside the 1–280 limit):
// a signature is permission in its most concrete form — taught, lent,
// acted with while the giver sleeps, and taken back in the morning.
// The turn is the reclaim; the ending ("the ink was still warm")
// says the hand that acted was, until a moment ago, still yours.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = `I taught it my signature,
the slant of yes, the weight of no.
It signs while I sleep,
books the table, pays the bill,
says my name in rooms I never enter.

This morning I took the pen back.
The ink was still warm.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM, "utf8");
