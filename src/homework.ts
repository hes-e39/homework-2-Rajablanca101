
export const addTwoNumbers = (a: number, b: number = 0) => {
  return a + b;
};

export const sumArray = (numbers: (number | string)[]): number => {
  const sum = numbers.reduce((acc: number, curr: number | string): number => {
    const num = typeof curr === 'string' ? Number.parseFloat(curr) : curr;
    return acc + num;
  }, 0);
  
  return sum;
};

export type Person = {
  name: string;
  age: number;
};

export type User = Person & {
  type: 'user';
};

// - isAdmin: boolean
export type Admin = Person & {
  isAdmin: boolean;
};


export type AllPeople = Person | User | Admin;

export const isAdmin = (u: AllPeople): boolean => {
  return (u as Admin).isAdmin !== undefined;
};

export const isUser = (u: AllPeople): boolean => {
  return (u as User).type === 'user';
};



export const userGreetingMessage = (u: AllPeople): string => {
  if ('isAdmin' in u) {
    return `Hello, ${u.name}. You are an admin.`;
  }
  if ('type' in u) {
    return `Hello, ${u.name}. You are a user.`;
  }
  return `Hello, ${u.name}. You do not have access.`;
};