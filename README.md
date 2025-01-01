# React useEffect Runs on Every Render Despite Dependency Array

This repository demonstrates a common issue in React where the `useEffect` hook runs on every render even when a dependency array is specified.  This can lead to performance problems and unexpected behavior.

## Bug Description
The `useEffect` hook is intended to perform side effects based on changes to specified dependencies. However, in some cases, it can unexpectedly re-run on every render, even when the dependencies haven't changed.  This often happens due to subtle state updates triggered outside the direct control of the component.

## How to Reproduce
Clone this repository and run the application. Observe the console logs – they show that `useEffect` runs more frequently than expected, which could result in unnecessary re-renders or performance issues.