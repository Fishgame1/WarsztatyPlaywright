export async function waitSeconds(timeoutSec: number) {
    await wait(timeoutSec * 1000);
}

export async function wait(timeout: number) {
    await new Promise(function (r) {
        setTimeout(r, timeout);
    });
}
