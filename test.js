import test from 'node:test'
import assert from 'node:assert'
import canonical from './index.js'

const examples = [
  [
    'replaces youtu.be',
    'https://youtu.be/IgJ_09Rznfg',
    'https://www.youtube.com/watch?v=IgJ_09Rznfg'
  ],
  [
    'preserves time offsets',
    'https://youtu.be/IgJ_09Rznfg?t=195',
    'https://www.youtube.com/watch?v=IgJ_09Rznfg&t=195'
  ],
  [
    'removes list and index parameters',
    'https://www.youtube.com/watch?v=J3Zic-HwyCk&list=WL&index=21',
    'https://www.youtube.com/watch?v=J3Zic-HwyCk'
  ],
  [
    'replaces m.youtube.com with www.youtube.com',
    'https://m.youtube.com/watch?v=J3Zic-HwyCk',
    'https://www.youtube.com/watch?v=J3Zic-HwyCk'
  ],
  [
    'passes non-YouTube URLs through',
    'https://example.com',
    'https://example.com'
  ]
]

for (const [label, input, output] of examples) {
  test(label, t => {
    assert.strictEqual(canonical(input), output)
  })
}
