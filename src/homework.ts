/**
 * Add two numbers. If b is not provided, assign b to 0.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b as a number
 */
export const addTwoNumbers = (a: number, b: number = 0): number => {
  return a + b;
};

export const sumArray = (numbers: (number | string)[]): number =>
  numbers.reduce(
    (acc: number, curr: number | string) =>
      acc + (typeof curr === "string" ? parseFloat(curr) : curr),
    0
  );

export type Person = {
  name: string;
  age: number;
};

export type User = Person & {
  type: "user";
};

export type Admin = Person & {
  isAdmin: boolean;
};

export type AllPeople = Person | User | Admin;

export const isAdmin = (u: AllPeople): boolean => {
  return (u as Admin).isAdmin !== undefined;
};

export const isUser = (u: AllPeople): boolean => {
  return (u as User).type === "user";
};

export const userGreetingMessage = (u: AllPeople): string => {
  if ("isAdmin" in u) {
    return `Hello, ${u.name}. You are an admin.`;
  } else if ("type" in u) {
    return `Hello, ${u.name}. You are a user.`;
  } else {
    return `Hello, ${u.name}. You do not have access.`;
  }
};
