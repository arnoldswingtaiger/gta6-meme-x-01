# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/arnoldswingtaiger/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/arnoldswingtaiger/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. The joke, in
two panels: a skeleton gamer still waiting at his dusty desk — 13 years for
GTA 6 — while my AI agent wins real money on make.fun in 13 minutes.
make.fun's ghost mascot stands in the Vice City sunset street, holding its
magenta star coin. The meme is posted on X from a public account; this
repository hands in the post's address in `POST.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Copies `POST.json` to `out/POST.json`. Node 22+, standard library only, no
network. Deterministic: two runs write the same bytes.

## Layout

- `main.ts` — entrypoint: copies `POST.json` from the repository root to the
  output directory. That is all the program has to do; the post itself is the
  entry.
- `POST.json` — the X post's address (`{"url": "https://x.com/<handle>/status/<id>"}`).
  A placeholder until the meme is posted.

---

Entered on [make.fun](https://make.fun/?ref=zv5hc3pw&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards
