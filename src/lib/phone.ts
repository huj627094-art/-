export const PHONE_PATTERN = "8\\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}";

export function formatPhone(value: string) {
  let digits = value.replace(/\D/g, "");
  if (!digits) return "";
  if (digits[0] === "7" || digits[0] === "8") digits = digits.slice(1);
  digits = digits.slice(0, 10);

  let result = "8";
  if (digits.length > 0) result += `(${digits.slice(0, 3)}`;
  if (digits.length > 3) result += `) ${digits.slice(3, 6)}`;
  if (digits.length > 6) result += `-${digits.slice(6, 8)}`;
  if (digits.length > 8) result += `-${digits.slice(8, 10)}`;
  return result;
}
