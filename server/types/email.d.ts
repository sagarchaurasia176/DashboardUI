interface User {
  name: string;
  emailId: string;
}

interface Payment {
  amount: number;
  paymentId: string;
  paymentDate: string;
  product: string;
}

export interface EmailData {
  user: User;
  payment: Payment;
}
