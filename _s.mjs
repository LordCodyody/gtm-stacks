import { firefox } from 'playwright';
const b = await firefox.launch();
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 }})).newPage();
await p.goto('http://127.0.0.1:8766/#stack', { waitUntil: 'load' });
await p.waitForTimeout(500);
await p.screenshot({ path: '/tmp/gtm-stack-v4.png' });
await b.close();
console.log('ok');
