import './scss/index.scss';

console.log('Worki!s');

async function hs() {
    return await Promise.resolve(1)
}

hs().then(console.log)
