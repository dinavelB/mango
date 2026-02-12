import type { StrengthBarProps } from "../types/interface/validators-props";

export function StrengthBar({
  strength,
  passwordErrors,
  showPasswordMatchError,
  data,
  errors,
}: StrengthBarProps) {
  return (
    <div className="mt-2">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${
            strength === "strong"
              ? "bg-green-500 w-full"
              : strength === "medium"
                ? "bg-yellow-500 w-2/3"
                : "bg-red-500 w-1/3"
          }`}
        ></div>
      </div>
      {passwordErrors.length > 0 && (
        <div className="mt-1 text-sm">
          {strength === "medium" && (
            <p className="text-yellow-600">Medium strength password</p>
          )}
          {strength === "weak" && <p className="text-red-600">Weak password</p>}
        </div>
      )}
      {showPasswordMatchError && data.confirmpassword && (
        <p className="text-red-500 text-sm">Passwords do not match</p>
      )}
      {(errors.confirmpassword || errors.email || errors.password) && (
        <p className="text-red-500 text-sm">
          Please fill in all required fields
        </p>
      )}
    </div>
  );
}
