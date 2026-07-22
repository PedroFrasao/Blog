// Transforma "Física" em "fisica", "Sistemas Embarcados" em "sistemas-embarcados", etc.
export function slugifyTag(tag: string): string {
  return tag
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
}