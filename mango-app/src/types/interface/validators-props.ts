import type { User, UserError } from "../user-type";

export interface StrengthBarProps {
  strength: string | null;
  passwordErrors: string[];
  showPasswordMatchError: boolean;
  data: User;
  errors: UserError;
}
