export interface Expense {
  id: number;
  expense: string;
  amount: number;
  date: string;
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
  value: '2020'
});

yearList.push({
  id: 2,
  value: '2021'
});

yearList.push({
  id: 3,
  value: '2022'
});

export const expenseList = [
  {
    id: 1,
    expense: "Cash Received",
    amount: 5000,
    date: "2022-01-01T04:04:29.345Z",
    comment: "Bala sent by ICICI"
  },
  {
    id: 2,
    expense: "Petrol",
    amount: 306,
    date: "2022-01-08T04:09:25.128Z",
    comment: "Kotampondi trip with Kayal & Saravanan"
  },
  {
    id: 3,
    expense: "Restaurant Bill",
    amount: 160,
    date: "2022-01-08T04:11:00.046Z",
    comment: "Murugan hotel mulanur"
  },
  {
    id: 5,
    expense: "Mobile Recharge",
    amount: 99,
    date: "2022-01-07T04:17:18.409Z",
    comment: "Father's Airtel"
  },
  {
    id: 5,
    expense: "Cash Received",
    amount: 531500,
    date: "2022-01-28T07:44:21.325Z",
    comment: "Chit fund received by HDFC account"
  },
  {
    id: 6,
    expense: "Encumbrance Certificate",
    amount: 1350,
    date: "2022-01-27T07:48:29.370Z",
    comment: "Land registration at Muthur"
  },
  {
    id: 7,
    expense: "Mobile Recharge",
    amount: 400,
    date: "2022-01-28T07:50:53.287Z",
    comment: "Paid 1800 for father's Airtel and subract with ec"
  },
  {
    id: 8,
    expense: "Cash Received",
    amount: 592991,
    date: "2022-01-23T07:55:11.538Z",
    comment: "ICICI Insta Loan PL-RIB 99445630"
  },
  {
    id: 9,
    expense: "Mobile Postpaid",
    amount: 589,
    date: "2022-01-27T04:43:32.331Z",
    comment: "HDFC CC"
  },
  {
    id: 10,
    expense: "Land Buying",
    amount: 1000000,
    date: "2022-02-05T04:49:12.435Z",
    comment: "Cheque no 995424 @ Karvazhi SBI by cash"
  },
  {
    id: 11,
    expense: "Land Buying",
    amount: 500000,
    date: "2022-01-31T04:55:29.042Z",
    comment: "Cheque no 995421 @ Karvazhi SBI by cash"
  },
  {
    id: 12,
    expense: "Land Buying",
    amount: 500000,
    date: "2022-02-03T05:00:55.137Z",
    comment: "Cheque no 995422 @ Karvazhi SBI by cash"
  },
  {
    id: 13,
    expense: "Mobile Recharge",
    amount: 479,
    date: "2022-02-08T05:07:22.329Z",
    comment: "Kayal's mobile"
  },
  {
    id: 14,
    expense: "Land Buying",
    amount: 145000,
    date: "2022-02-10T08:48:28.113Z",
    comment: "Imps payment ICICI"
  },
  {
    id: 16,
    expense: "Land Reg Fee",
    amount: 10000,
    date: "2022-02-10T08:54:23.402Z",
    comment: "To gunasekhar"
  },
  {
    id: 17,
    expense: "Land Reg Fee",
    amount: 14000,
    date: "2022-02-11T08:55:44.006Z",
    comment: "To gunasekhar"
  },
  {
    id: 15,
    expense: "Land Buying",
    amount: 5000,
    date: "2022-02-11T08:50:03.064Z",
    comment: "ICICI debit card"
  },
  {
    id: 18,
    expense: "Department Store",
    amount: 5000,
    date: "2022-05-28T13:19:34.777Z",
    comment: "Aravind store Muthur for chennai relocation"
  },
  {
    id: 19,
    expense: "Petrol",
    amount: 500,
    date: "2022-05-29T09:33:44.845Z",
    comment: "Father's car m.co"
  },
  {
    id: 20,
    expense: "Cash Given",
    amount: 1000,
    date: "2022-05-30T07:04:11.714Z",
    comment: "Kayal"
  },
  {
    id: 21,
    expense: "Fruits",
    amount: 472,
    date: "2022-05-30T07:04:32.624Z",
    comment: "Elakkiya appyampatti"
  },
  {
    id: 22,
    expense: "Petrol",
    amount: 206,
    date: "2022-05-30T07:05:24.300Z",
    comment: "Kootampondi trip"
  },
  {
    id: 23,
    expense: "Cash Given",
    amount: 1500,
    date: "2022-05-31T07:06:48.187Z",
    comment: "Groundnut oil 5 litre for chennai trip"
  },
  {
    id: 24,
    expense: "Cash Given",
    amount: 1500,
    date: "2022-05-31T10:31:00.490Z",
    comment: "Chennai relocation from kootampondi"
  },
  {
    id: 25,
    expense: "Cash Given",
    amount: 1000,
    date: "2022-06-01T10:32:13.971Z",
    comment: "Chennai relocation for arumugham bonus"
  },
  {
    id: 26,
    expense: "Cash Given",
    amount: 5000,
    date: "2022-05-31T10:33:53.550Z",
    comment: "South garden patta transfer"
  },
  {
    id: 28,
    expense: "Vegetables",
    amount: 320,
    date: "2022-06-02T15:56:27.428Z",
    comment: "Chennai store"
  },
  {
    id: 29,
    expense: "Department Store",
    amount: 320,
    date: "2022-06-02T15:56:59.181Z",
    comment: "Cooker whistle"
  },
  {
    id: 30,
    expense: "Department Store",
    amount: 240,
    date: "2022-06-02T16:02:05.347Z",
    comment: "Fanta, milk and mob"
  },
  {
    id: 31,
    expense: "Rice",
    amount: 815,
    date: "2022-06-02T16:07:00.348Z",
    comment: "Ponni ₹59/kg and idli rice 225/5 kg"
  },
  {
    id: 32,
    expense: "Cash Given",
    amount: 1400,
    date: "2022-06-03T09:17:32.242Z",
    comment: "Water doctor and tv installation"
  },
  {
    id: 33,
    expense: "Bus Ticket",
    amount: 892,
    date: "2022-06-03T16:06:36.342Z",
    comment: "Red bus Ticket to karur for father"
  },
  {
    id: 34,
    expense: "Fruits",
    amount: 410,
    date: "2022-06-04T03:48:17.292Z",
    comment: "Velachery"
  },
  {
    id: 35,
    expense: "Travel Fare",
    amount: 500,
    date: "2022-06-04T02:42:17.766Z",
    comment: "Besant nagar beach"
  },
  {
    id: 36,
    expense: "Others",
    amount: 800,
    date: "2022-06-06T13:41:06.265Z",
    comment: "Windows curtain setup"
  },
  {
    id: 38,
    expense: "Medical",
    amount: 210,
    date: "2022-06-10T05:34:26.086Z",
    comment: "Digital thermometer"
  },
  {
    id: 39,
    expense: "Restaurant Bill",
    amount: 175,
    date: "2022-06-08T05:35:52.019Z",
    comment: "Chicken lollipop and parrota"
  },
  {
    id: 40,
    expense: "Fruits",
    amount: 135,
    date: "2022-06-10T05:41:28.470Z",
    comment: "Red banana"
  },
  {
    id: 41,
    expense: "Department Store",
    amount: 2615,
    date: "2022-06-11T15:05:56.429Z",
    comment: "Dmart Velachery - Grocery"
  },
  {
    id: 37,
    expense: "Others",
    amount: 740,
    date: "2022-06-06T13:43:41.331Z",
    comment: "Washing machine inspection"
  },
  {
    id: 41,
    expense: "Restaurant Bill",
    amount: 627,
    date: "2022-06-11T15:13:17.232Z",
    comment: "Chicken biryani"
  },
  {
    id: 42,
    expense: "Department Store",
    amount: 386,
    date: "2022-06-12T14:29:30.741Z",
    comment: "Hlks,curd,milk,egg"
  },
  {
    id: 43,
    expense: "Vegetables",
    amount: 445,
    date: "2022-06-13T17:24:14.703Z",
    comment: ""
  },
  {
    id: 44,
    expense: "House Advance",
    amount: 30000,
    date: "2022-06-14T17:22:44.326Z",
    comment: "Chennai rented house"
  },
  {
    id: 45,
    expense: "Rice",
    amount: 1475,
    date: "2022-06-14T17:23:31.357Z",
    comment: "25 kg Vijay rice bag"
  },
  {
    id: 46,
    expense: "Department Store",
    amount: 1540,
    date: "2022-06-24T13:36:14.257Z",
    comment: "sumed up for a week"
  },
  {
    id: 47,
    expense: "Water Doctor",
    amount: 3000,
    date: "2022-06-24T13:38:05.585Z",
    comment: "Valve replacement by ktk cc"
  },
  {
    id: 48,
    expense: "Gas Cylinder",
    amount: 1018,
    date: "2022-06-25T11:06:40.234Z",
    comment: "SBI UPI"
  },
  {
    id: 49,
    expense: "Washing Machine",
    amount: 3657,
    date: "2022-06-25T11:07:46.615Z",
    comment: "Electric kit, pipe"
  },
  {
    id: 50,
    expense: "Washing Machine",
    amount: 3650,
    date: "2022-06-25T12:03:41.196Z",
    comment: "Board memory and tube"
  },
  {
    id: 51,
    expense: "Vegetables",
    amount: 387,
    date: "2022-06-28T15:25:03.719Z",
    comment: ""
  },
  {
    id: 52,
    expense: "Department Store",
    amount: 704,
    date: "2022-06-28T15:26:00.675Z",
    comment: ""
  },
  {
    id: 53,
    expense: "Fish",
    amount: 800,
    date: "2022-06-28T15:27:45.547Z",
    comment: ""
  },
  {
    id: 54,
    expense: "Amazon",
    amount: 129,
    date: "2022-06-28T15:30:00.954Z",
    comment: "Tempered Glass"
  },
  {
    id: 55,
    expense: "House Rent",
    amount: 7000,
    date: "2022-06-29T14:08:45.443Z",
    comment: "Gpay-sbi"
  },
  {
    id: 56,
    expense: "Mobile Phone",
    amount: 5545,
    date: "2022-10-06T05:59:24.100Z",
    comment: "RedmiA1 ICICI CC amazon"
  },
  {
    id: 57,
    expense: "Mobile Phone",
    amount: 9900,
    date: "2022-09-15T06:00:18.998Z",
    comment: "Vivoy15s ICICI CC"
  },
  {
    id: 58,
    expense: "Airtel Setup Box",
    amount: 1258,
    date: "2022-09-27T06:05:42.971Z",
    comment: "Airtel hd box with 1 month subscription"
  },
  {
    id: 59,
    expense: "Department Store",
    amount: 545,
    date: "2022-10-08T06:06:55.956Z",
    comment: ""
  },
  {
    id: 60,
    expense: "Train Ticket",
    amount: 1475,
    date: "2022-09-25T06:11:19.968Z",
    comment: "Amazon Pay ICICI card"
  },
  {
    id: 62,
    expense: "Amazon",
    amount: 1358,
    date: "2022-10-03T09:50:48.568Z",
    comment: ""
  },
  {
    id: 63,
    expense: "Meesho",
    amount: 1402,
    date: "2022-09-30T09:53:06.754Z",
    comment: ""
  },
  {
    id: 64,
    expense: "Department Store",
    amount: 2894,
    date: "2022-09-27T09:53:45.018Z",
    comment: "Sai dept"
  },
  {
    id: 65,
    expense: "Gas Cylinder",
    amount: 1068,
    date: "2022-09-26T09:55:33.317Z",
    comment: ""
  },
  {
    id: 66,
    expense: "Train Ticket",
    amount: 1905,
    date: "2022-09-21T09:55:54.613Z",
    comment: "Palani to Chennai"
  },
  {
    id: 67,
    expense: "Mobile Recharge",
    amount: 209,
    date: "2022-09-17T10:00:44.187Z",
    comment: ""
  },
  {
    id: 68,
    expense: "House Rent",
    amount: 7000,
    date: "2022-09-30T10:01:47.055Z",
    comment: ""
  },
  {
    id: 69,
    expense: "Department Store",
    amount: 1402,
    date: "2022-09-30T10:06:45.945Z",
    comment: "Paytm"
  },
  {
    id: 70,
    expense: "Postpaid Bill",
    amount: 592,
    date: "2022-09-25T10:08:09.467Z",
    comment: "Airtel"
  },
  {
    id: 71,
    expense: "Restaurant Bill",
    amount: 395,
    date: "2022-09-29T10:10:44.739Z",
    comment: "Food card"
  },
  {
    id: 72,
    expense: "Mobile Phone",
    amount: 1199,
    date: "2022-09-15T10:11:47.668Z",
    comment: "One assist"
  },
  {
    id: 72,
    expense: "Department Store",
    amount: 682,
    date: "2022-10-11T14:31:08.933Z",
    comment: ""
  },
  {
    id: 73,
    expense: "Department Store",
    amount: 1077,
    date: "2022-10-11T14:33:11.590Z",
    comment: "Food card"
  },
  {
    id: 74,
    expense: "Milk",
    amount: 490,
    date: "2022-09-30T14:37:56.451Z",
    comment: ""
  },
  {
    id: 75,
    expense: "Vegetables",
    amount: 885,
    date: "2022-10-04T14:38:20.535Z",
    comment: ""
  },
  {
    id: 76,
    expense: "EB Bill",
    amount: 233,
    date: "2022-10-21T04:48:51.171Z",
    comment: "Paytm"
  },
  {
    id: 77,
    expense: "Festival Dress",
    amount: 6070,
    date: "2022-10-22T04:49:47.771Z",
    comment: "The Chennai silks, Velachery - ICICI cc"
  },
  {
    id: 78,
    expense: "Sweets",
    amount: 496,
    date: "2022-10-24T14:17:28.529Z",
    comment: "Diwali Palani"
  },
  {
    id: 79,
    expense: "Petrol",
    amount: 350,
    date: "2022-10-24T03:21:28.319Z",
    comment: "AR Agency"
  },
  {
    id: 80,
    expense: "Mobile Phone",
    amount: 350,
    date: "2022-10-24T03:22:02.442Z",
    comment: "New Jio sim - 9361495983"
  },
  {
    id: 81,
    expense: "JioFi Hotspot",
    amount: 3500,
    date: "2022-10-26T17:08:30.648Z",
    comment: "Andavar Mobile, Muthur"
  },
  {
    id: 82,
    expense: "Postpaid Bill",
    amount: 592,
    date: "2022-10-29T04:35:36.420Z",
    comment: "Paytm HDFC CC"
  },
  {
    id: 83,
    expense: "Train Ticket",
    amount: 1475,
    date: "2022-10-27T04:36:09.712Z",
    comment: "Amazon pay - ICICI CC"
  },
  {
    id: 84,
    expense: "House Rent",
    amount: 7000,
    date: "2022-10-31T08:38:00.398Z",
    comment: ""
  },
  {
    id: 85,
    expense: "Milk",
    amount: 1470,
    date: "2022-10-31T08:38:23.216Z",
    comment: ""
  },
  {
    id: 86,
    expense: "Mobile Recharge",
    amount: 209,
    date: "2022-11-06T08:16:54.246Z",
    comment: "Kayal"
  },
  {
    id: 87,
    expense: "Department Store",
    amount: 3163,
    date: "2022-11-11T14:24:24.084Z",
    comment: "Dmart food card"
  },
  {
    id: 88,
    expense: "Restaurant Bill",
    amount: 344,
    date: "2022-11-11T14:25:32.358Z",
    comment: ""
  },
  {
    id: 89,
    expense: "Mobile Recharge",
    amount: 209,
    date: "2022-11-12T14:25:50.141Z",
    comment: "Father Jio"
  },
  {
    id: 90,
    expense: "Cash Given",
    amount: 10000,
    date: "2022-11-09T14:29:26.987Z",
    comment: "Father @ Muthur"
  },
  {
    id: 91,
    expense: "Cash Given",
    amount: 3000,
    date: "2022-11-07T14:29:57.334Z",
    comment: "Sathish marriage gift"
  },
  {
    id: 92,
    expense: "Cash Given",
    amount: 1000,
    date: "2022-11-07T14:31:05.204Z",
    comment: "Dilip marriage gift"
  },
  {
    id: 93,
    expense: "Auto expense",
    amount: 300,
    date: "2022-11-11T14:31:33.321Z",
    comment: ""
  },
  {
    id: 94,
    expense: "Vegetables",
    amount: 315,
    date: "2022-11-09T14:33:20.811Z",
    comment: "Chennai"
  },
  {
    id: 95,
    expense: "Preethi Grinder",
    amount: 550,
    date: "2022-11-17T12:27:39.616Z",
    comment: "Replaced capacitor and bearing"
  },
  {
    id: 96,
    expense: "Stationary",
    amount: 520,
    date: "2022-11-15T12:28:37.813Z",
    comment: "Slate, pencil for gs"
  },
  {
    id: 97,
    expense: "Vegetables",
    amount: 105,
    date: "2022-11-16T12:29:30.108Z",
    comment: ""
  },
  {
    id: 98,
    expense: "Department Store",
    amount: 195,
    date: "2022-11-16T12:30:08.445Z",
    comment: ""
  },
  {
    id: 99,
    expense: "Vegetables",
    amount: 300,
    date: "2022-11-19T14:20:08.873Z",
    comment: ""
  },
  {
    id: 100,
    expense: "Gas Cylinder",
    amount: 1068,
    date: "2022-11-23T12:33:16.289Z",
    comment: "Indane"
  },
  {
    id: 101,
    expense: "Medical",
    amount: 139,
    date: "2022-11-23T12:33:37.407Z",
    comment: ""
  },
  {
    id: 102,
    expense: "Restaurant Bill",
    amount: 335,
    date: "2022-11-15T12:38:23.977Z",
    comment: "Swiggy"
  },
  {
    id: 103,
    expense: "Restaurant Bill",
    amount: 196,
    date: "2022-11-23T12:39:59.536Z",
    comment: ""
  },
  {
    id: 104,
    expense: "Department Store",
    amount: 437,
    date: "2022-11-23T12:40:16.955Z",
    comment: ""
  },
  {
    id: 105,
    expense: "Mobile Recharge",
    amount: 209,
    date: "2022-11-23T12:42:14.919Z",
    comment: "My Jio"
  },
  {
    id: 106,
    expense: "Department Store",
    amount: 365,
    date: "2022-11-21T12:44:19.743Z",
    comment: ""
  },
  {
    id: 107,
    expense: "Department Store",
    amount: 1739,
    date: "2022-11-25T10:25:15.331Z",
    comment: "Dmart"
  },
  {
    id: 108,
    expense: "Train Ticket",
    amount: 1475,
    date: "2022-11-28T08:44:47.508Z",
    comment: "Pongal trip 12-Jan"
  },
  {
    id: 109,
    expense: "Train Ticket",
    amount: 120,
    date: "2022-11-27T08:45:31.640Z",
    comment: "Cancellation fee"
  },
  {
    id: 110,
    expense: "Cheeky Monkey",
    amount: 1000,
    date: "2022-11-26T08:46:02.584Z",
    comment: ""
  },
  {
    id: 111,
    expense: "Restaurant Bill",
    amount: 700,
    date: "2022-11-26T08:47:42.055Z",
    comment: "MacDonald"
  },
  {
    id: 112,
    expense: "Restaurant Bill",
    amount: 187,
    date: "2022-11-28T08:51:21.966Z",
    comment: ""
  },
  {
    id: 113,
    expense: "Parking Fee",
    amount: 80,
    date: "2022-11-26T08:52:41.249Z",
    comment: ""
  },
  {
    id: 114,
    expense: "Vegetables",
    amount: 888,
    date: "2022-11-28T16:17:23.713Z",
    comment: ""
  },
  {
    id: 115,
    expense: "Department Store",
    amount: 210,
    date: "2022-11-28T16:17:37.783Z",
    comment: ""
  },
  {
    id: 116,
    expense: "Postpaid Bill",
    amount: 528,
    date: "2022-11-29T06:13:50.291Z",
    comment: "Amazon pay"
  },
  {
    id: 117,
    expense: "House Rent",
    amount: 13000,
    date: "2022-11-30T07:54:58.748Z",
    comment: "ICICI"
  },
  {
    id: 118,
    expense: "Mattress",
    amount: 575,
    date: "2022-11-30T08:03:34.892Z",
    comment: "Amazon"
  },
  {
    id: 119,
    expense: "Rice Bag",
    amount: 1600,
    date: "2022-11-30T14:24:41.269Z",
    comment: "Vijay rice"
  },
  {
    id: 120,
    expense: "Department Store",
    amount: 391,
    date: "2022-11-30T14:25:05.932Z",
    comment: ""
  },
  {
    id: 121,
    expense: "Milk",
    amount: 1470,
    date: "2022-11-30T10:59:51.859Z",
    comment: ""
  }
]