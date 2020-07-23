# Example of slow tsc

```
https://github.com/aivenkimmob/ts-immutable-example.git
cd ts-immutable-example
npm i
./node_modules/.bin/tsc --diagnostics
```

It takes >50 seconds to compile:

```
➜  test tsc --diagnostics
Files:               16
Lines:            31793
Nodes:           126812
Identifiers:      47415
Symbols:         961743
Types:           426489
Instantiations: 1980702
Memory used:    632837K
I/O read:         0.00s
I/O write:        0.00s
Parse time:       0.33s
Bind time:        0.16s
Check time:      52.55s
Emit time:        0.03s
Total time:      53.06s
```

You can also run `npm test` to run the example.ts with ts-node.
