export function prefixClasses() {
  const prefixInput = document.getElementById("prefix");
  const inputArea = document.getElementById("input");
  const outputArea = document.getElementById("output");

  const userPrefix = prefixInput.value || "x";
  const dash = "-"
  let prefix = userPrefix + dash;
  const input = inputArea.value;

const transformed = input.replace(/class=(["'])([^"']+)\1/g, (match, quote, classList) => {
  const prefixed = classList
    .split(/\s+/)
    .map(cls => prefix + cls)
    .join(' ');
  return `class=${quote}${prefixed}${quote}`;
});

  outputArea.value = transformed;
}

export function copyOutput() {
  const outputArea = document.getElementById("output");
  outputArea.select();
  document.execCommand("copy");
}
