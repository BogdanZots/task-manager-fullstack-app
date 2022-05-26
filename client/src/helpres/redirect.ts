

export function redirect(patch: string): void {
  const location = window.location;
  location.assign(patch);
}

