# Otonomo Exercise

This is a solution by Daniel Strokovsky.

## Running
To run this exercise, clone this repo, build and run either `yarn start` or `npm run start`.

## Comments
Unfortunately I had some technical issues with the original repo so it took me a while to get it running. Because of this I left a few open issues:
* Design is as minimal as possible for functionality
* I wanted to expand `Emitter` to save results and handle so that there will be no delay between adding / removing a filter and when the event list is updated.
* The low fuel filtering isn't done properly. It works but is very hacky.
* I wasn't sure if I was allowed to update `React` and use hooks etc, or if I can use external libraries when possible, so I didn't.