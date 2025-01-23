export class EditorEngine {
  value: string;
  constructor() {
    this.value = '';
  }

  onChange(value: string) {
    this.value = value;
  }
}
