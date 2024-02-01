#!/usr/bin/env node
import normalize from './index.js'
import readline from 'node:readline'

const args = process.argv.slice(2)

if (args.includes('-h') || args.includes('--help')) {
  process.stdout.write('Normalize YouTube URLs to https://www.youtube.com/watch?v={id}{&t}.\n\n')
  process.stdout.write('Usage: [<URL>, <URL>...] [< stream of URLs]\n')
  process.exit(1)
}

function outputURL(url) {
  process.stdout.write(normalize(url))
  process.stdout.write('\n')
}

for (const argument of process.argv.slice(2)) outputURL(url)

const lines = readline.createInterface({
  input: process.stdin,
  terminal: false
}).on('line', outputURL)
