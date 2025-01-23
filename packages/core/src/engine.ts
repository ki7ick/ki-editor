export type OnStoreChange = () => void;

export class EditorEngine {
  value: string;
  callbacks: OnStoreChange[] = [];
  constructor() {
    this.value = '';
  }

  onChange(value: string) {
    this.value = value;
    this.callbacks.forEach(callback => {
      callback();
    });
  }

  subscribe(callback: OnStoreChange) {
    this.callbacks.push(callback);

    // return unsubscribe function
    return () => {
      const index = this.callbacks.indexOf(callback);
      if (index > -1) {
        this.callbacks.splice(index, 1);
      }
    };
  }
}
