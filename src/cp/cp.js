import { fork } from "child_process"
import __dirname from './pathGenerator/pathGenerator.js';

export const spawnChildProcess = async (args) => {
    fork(`${__dirname}files/script.js`, [...args.split(' ')]);
};

// Put your arguments in function call to test this functionality
spawnChildProcess("--some-arg value1 --other 1337 --arg2 42");
