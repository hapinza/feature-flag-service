# Feature Flag Service (Node.js)

A simple feature flag service built with Node.js and Express.

## Features
- Percentage-based rollout
- User-based deterministic assignment
- REST API for feature evaluation

## Example

GET /feature?userId=42&feature=new_ui

Response:
{
  "enabled": false
}

## Why I built this
I built this project to better understand feature flag systems and experimentation infrastructure used in large-scale applications.
