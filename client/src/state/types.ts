interface ExpensesByCategory {
    salaries: number;
    services: number;
    supplies: number;
}

interface Month {
    id: string;
    month: string;
    nonOperationalExpenses: number;
    operationalExpenses: number;
    revenue: number;
    _id: string;
    expenses: number;
}

interface Day {
    date: string,
    expenses: number;
    id: number;
    revenue: number;
    _id: number;
}

export interface GetKpisResponse {
    _id: string,
    id: string,
    __v: number,
    createdAt: string,
    totalExpenses: number,
    totalProfit: number,
    totalRevenue: number,
    updatedAt: string,
    expensesByCategory: ExpensesByCategory,
    monthlyData: Array<Month>;
    dailyData: Array<Day>;
}

export interface GetProductsResponse {
    _id: string;
    id: string;
    __v: number;
    createdAt: string;
    price: number;
    expense: number;
    transactions: Array<string>;
    updatedAt: string;
}

export interface GetTransactionsResponse {
    _id: string;
    id: string;
    __v: number;
    createdAt: string;
    buyer: string;
    amount: number;
    productIds: Array<string>;
    updatedAt: string;
}