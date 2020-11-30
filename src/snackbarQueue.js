import { createSnackbarQueue } from '@rmwc/snackbar';

export const snackbarQueue = createSnackbarQueue();

export function notify(message) {
    snackbarQueue.notify({ title: message });
}