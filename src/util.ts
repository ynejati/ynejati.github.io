export function handleAboutClick(): void {
  window.location.pathname = 'about';
}

export function handleProjectsClick(): void {
  window.location.pathname = 'projects';
}

export function handleBlogClick(): void {
  window.location.pathname = 'blog';
}

export function handleSignatureClick(): void {
  window.location.pathname = '';
}

// TODO: Doesn't seem like the best thing, causes browser refresh resulting in poor UX.