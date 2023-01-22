export interface Expense {
  id: Number;
  expense: string;
  amount: Number;
  date: Date;
  comment: string;
}


export interface DropDown {
  id: number;
  value: string;
}

export const monthList: DropDown[] = [];

monthList.push({
  id: 1,
  value: 'JAN'
});

monthList.push({
  id: 2,
  value: 'FEB'
});

monthList.push({
  id: 3,
  value: 'MAR'
});

monthList.push({
  id: 4,
  value: 'APR'
});
monthList.push({
  id: 5,
  value: 'MAY'
});
monthList.push({
  id: 6,
  value: 'JUN'
});
monthList.push({
  id: 7,
  value: 'JULY'
});
monthList.push({
  id: 8,
  value: 'AUG'
});
monthList.push({
  id: 9,
  value: 'SEP'
});
monthList.push({
  id: 10,
  value: 'OCT'
});
monthList.push({
  id: 11,
  value: 'NOV'
});
monthList.push({
  id: 12,
  value: 'DEC'
});

export const yearList: DropDown[] = [];

yearList.push({
  id: 1,
  value: '2022'
});

yearList.push({
  id: 2,
  value: '2023'
});

export const expenseTypes=[
  "Petrol",
  "Snacks",
  "Medical",
  "Fruits",
  "Restaurant Bill",
  "Department Store",
  "Cash Given",
  "DTH Recharge",
  "Mobile Recharge",
  "Gas Cylinder",
  "Mobile Postpaid",
  "Vegetables",
  "Rice Bag",
  "Train Ticket",
  "Amazon",
  "Swiggy",
  "Swiggy Instamart",
  "A2B",
  "PVR Cinemas",
  "Kids Car Driving",
  "Parking Fee"
];
