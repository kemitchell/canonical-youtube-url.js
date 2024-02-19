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
    'passes through youtu.be URLs without video IDs',
    'https://youtu.be/',
    'https://youtu.be/'
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
    'replaces Shorts link with YouTube link',
    'https://www.youtube.com/shorts/5my6xTh2M48',
    'https://www.youtube.com/watch?v=5my6xTh2M48'
  ],
  [
    'passes non-video YouTube URLs through',
    'https://www.youtube.com/feed/history',
    'https://www.youtube.com/feed/history'
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
