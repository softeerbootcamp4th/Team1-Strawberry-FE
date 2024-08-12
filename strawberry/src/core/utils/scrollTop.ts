type ScrollTopProps = number;

export function scrollTop(top: ScrollTopProps) {
  window.scrollTo({ top: top, behavior: "smooth" });
}
