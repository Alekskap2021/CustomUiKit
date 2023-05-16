export function getSizesAndCoords(trigger: Element, tooltip: Element) {
  const { width: tooltipW, height: tooltipH } = tooltip.getBoundingClientRect();

  const {
    left: triggerToLeft,
    top: triggerToTop,
    bottom,
    right,
    width: triggerW,
    height: triggerH,
  } = trigger.getBoundingClientRect();

  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const triggerToDocumentLeft = triggerToLeft + scrollLeft;
  const triggerToDocumentTop = triggerToTop + scrollTop;

  const clientH = document.documentElement.clientHeight;
  const clientW = document.documentElement.clientWidth;
  const triggerToBottom = clientH - bottom;
  const triggerToRight = clientW - right;

  return {
    triggerToLeft,
    triggerToRight,
    triggerToTop,
    triggerToBottom,
    triggerToDocumentTop,
    triggerToDocumentLeft,
    triggerW,
    triggerH,
    tooltipH,
    tooltipW,
  };
}
