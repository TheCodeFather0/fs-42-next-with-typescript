export type TUsername = "Administrator" | "Admin";

export type TStudents = (string | number)[];

export interface IUser {
  age: number;
  name: string;
  surname: string;
  langs?: string[]; // optional
  getFullName: () => string;
}
// optional => ?
