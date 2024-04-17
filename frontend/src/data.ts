//Source code generated by AppGPT (www.appgpt.tech)
let data: any = {
  defaultData: {
    Users: [
      {
        userId: 1,
        name: 'name 1',
        email: 'email 1',
        password: 'password 1',
        role: 'role 1',
        id: 10,
      },
      {
        userId: 2,
        name: 'name 2',
        email: 'email 2',
        password: 'password 2',
        role: 'role 2',
        id: 68,
      },
      {
        userId: 3,
        name: 'name 3',
        email: 'email 3',
        password: 'password 3',
        role: 'role 3',
        id: 52,
      },
      {
        userId: 4,
        name: 'name 4',
        email: 'email 4',
        password: 'password 4',
        role: 'role 4',
        id: 89,
      },
      {
        userId: 5,
        name: 'name 5',
        email: 'email 5',
        password: 'password 5',
        role: 'role 5',
        id: 38,
      },
    ],
    Customers: [
      {
        customerId: 1,
        email: 'email 1',
        password: 'password 1',
        name: 'name 1',
        age: 1,
        gender: 'gender 1',
        weight: 0.96,
        height: 0.37,
        healthConditions: 'healthConditions 1',
        goals: 'goals 1',
        dietaryPreferences: 'dietaryPreferences 1',
        billingAddress: 'billingAddress 1',
        country: 'country 1',
        phone: 'phone 1',
        id: 64,
      },
      {
        customerId: 2,
        email: 'email 2',
        password: 'password 2',
        name: 'name 2',
        age: 2,
        gender: 'gender 2',
        weight: 0.23,
        height: 0.93,
        healthConditions: 'healthConditions 2',
        goals: 'goals 2',
        dietaryPreferences: 'dietaryPreferences 2',
        billingAddress: 'billingAddress 2',
        country: 'country 2',
        phone: 'phone 2',
        id: 14,
      },
      {
        customerId: 3,
        email: 'email 3',
        password: 'password 3',
        name: 'name 3',
        age: 3,
        gender: 'gender 3',
        weight: 0.42,
        height: 0.67,
        healthConditions: 'healthConditions 3',
        goals: 'goals 3',
        dietaryPreferences: 'dietaryPreferences 3',
        billingAddress: 'billingAddress 3',
        country: 'country 3',
        phone: 'phone 3',
        id: 32,
      },
      {
        customerId: 4,
        email: 'email 4',
        password: 'password 4',
        name: 'name 4',
        age: 4,
        gender: 'gender 4',
        weight: 0.05,
        height: 0.11,
        healthConditions: 'healthConditions 4',
        goals: 'goals 4',
        dietaryPreferences: 'dietaryPreferences 4',
        billingAddress: 'billingAddress 4',
        country: 'country 4',
        phone: 'phone 4',
        id: 65,
      },
      {
        customerId: 5,
        email: 'email 5',
        password: 'password 5',
        name: 'name 5',
        age: 5,
        gender: 'gender 5',
        weight: 0.26,
        height: 0.23,
        healthConditions: 'healthConditions 5',
        goals: 'goals 5',
        dietaryPreferences: 'dietaryPreferences 5',
        billingAddress: 'billingAddress 5',
        country: 'country 5',
        phone: 'phone 5',
        id: 94,
      },
    ],
    Workouts: [
      {
        workoutId: 1,
        customerId: 1,
        type: 'type 1',
        duration: 0.28,
        intensity: 'intensity 1',
        caloriesBurned: 0.83,
        date: '2024-04-12T19:55:01.250Z',
        id: 100,
      },
      {
        workoutId: 2,
        customerId: 2,
        type: 'type 2',
        duration: 0.3,
        intensity: 'intensity 2',
        caloriesBurned: 0.91,
        date: '2024-01-03T17:01:35.075Z',
        id: 22,
      },
      {
        workoutId: 3,
        customerId: 3,
        type: 'type 3',
        duration: 0.69,
        intensity: 'intensity 3',
        caloriesBurned: 0.26,
        date: '2025-04-07T01:26:16.881Z',
        id: 24,
      },
      {
        workoutId: 4,
        customerId: 4,
        type: 'type 4',
        duration: 0.33,
        intensity: 'intensity 4',
        caloriesBurned: 0.49,
        date: '2024-05-28T15:26:34.083Z',
        id: 74,
      },
      {
        workoutId: 5,
        customerId: 5,
        type: 'type 5',
        duration: 0.79,
        intensity: 'intensity 5',
        caloriesBurned: 0.14,
        date: '2024-08-23T23:12:49.828Z',
        id: 16,
      },
    ],
    Nutrition: [
      {
        mealId: 1,
        customerId: 1,
        foodItem: 'foodItem 1',
        quantity: 0.82,
        calories: 0.27,
        macronutrients: 'macronutrients 1',
        date: '2023-09-19T03:47:05.958Z',
        id: 75,
      },
      {
        mealId: 2,
        customerId: 2,
        foodItem: 'foodItem 2',
        quantity: 0.47,
        calories: 0.69,
        macronutrients: 'macronutrients 2',
        date: '2023-11-12T22:27:09.024Z',
        id: 26,
      },
      {
        mealId: 3,
        customerId: 3,
        foodItem: 'foodItem 3',
        quantity: 0.59,
        calories: 0.28,
        macronutrients: 'macronutrients 3',
        date: '2024-06-10T13:32:25.235Z',
        id: 90,
      },
      {
        mealId: 4,
        customerId: 4,
        foodItem: 'foodItem 4',
        quantity: 0.89,
        calories: 0.54,
        macronutrients: 'macronutrients 4',
        date: '2024-01-02T09:29:49.311Z',
        id: 15,
      },
      {
        mealId: 5,
        customerId: 5,
        foodItem: 'foodItem 5',
        quantity: 0.74,
        calories: 0.92,
        macronutrients: 'macronutrients 5',
        date: '2024-11-01T07:02:34.633Z',
        id: 69,
      },
    ],
    HealthMetrics: [
      {
        metricId: 1,
        customerId: 1,
        type: 'type 1',
        value: 0.48,
        unit: 'unit 1',
        date: '2025-04-06T11:19:48.526Z',
        id: 19,
      },
      {
        metricId: 2,
        customerId: 2,
        type: 'type 2',
        value: 0.08,
        unit: 'unit 2',
        date: '2025-03-06T21:56:14.399Z',
        id: 10,
      },
      {
        metricId: 3,
        customerId: 3,
        type: 'type 3',
        value: 0.94,
        unit: 'unit 3',
        date: '2023-10-27T15:50:27.724Z',
        id: 84,
      },
      {
        metricId: 4,
        customerId: 4,
        type: 'type 4',
        value: 0.13,
        unit: 'unit 4',
        date: '2025-01-20T01:51:23.483Z',
        id: 94,
      },
      {
        metricId: 5,
        customerId: 5,
        type: 'type 5',
        value: 0.59,
        unit: 'unit 5',
        date: '2025-01-16T04:42:24.830Z',
        id: 11,
      },
    ],
    Notifications: [
      {
        notificationId: 1,
        customerId: 1,
        type: 'type 1',
        message: 'message 1',
        dateScheduled: '2023-06-22T16:11:27.017Z',
        status: 'status 1',
        id: 93,
      },
      {
        notificationId: 2,
        customerId: 2,
        type: 'type 2',
        message: 'message 2',
        dateScheduled: '2023-12-10T18:31:33.598Z',
        status: 'status 2',
        id: 26,
      },
      {
        notificationId: 3,
        customerId: 3,
        type: 'type 3',
        message: 'message 3',
        dateScheduled: '2025-02-09T18:32:38.106Z',
        status: 'status 3',
        id: 51,
      },
      {
        notificationId: 4,
        customerId: 4,
        type: 'type 4',
        message: 'message 4',
        dateScheduled: '2023-06-16T21:21:17.878Z',
        status: 'status 4',
        id: 1,
      },
      {
        notificationId: 5,
        customerId: 5,
        type: 'type 5',
        message: 'message 5',
        dateScheduled: '2024-05-12T05:25:06.955Z',
        status: 'status 5',
        id: 12,
      },
    ],
    SupportTickets: [
      {
        ticketId: 1,
        userId: 1,
        customerId: 1,
        description: 'description 1',
        status: 'status 1',
        creationDate: '2024-02-21T16:18:39.202Z',
        resolutionDate: '2024-02-16T23:13:59.752Z',
        id: 70,
      },
      {
        ticketId: 2,
        userId: 2,
        customerId: 2,
        description: 'description 2',
        status: 'status 2',
        creationDate: '2024-06-08T09:02:50.657Z',
        resolutionDate: '2023-08-21T01:49:08.881Z',
        id: 58,
      },
      {
        ticketId: 3,
        userId: 3,
        customerId: 3,
        description: 'description 3',
        status: 'status 3',
        creationDate: '2025-02-07T18:16:24.759Z',
        resolutionDate: '2025-03-14T16:24:37.041Z',
        id: 48,
      },
      {
        ticketId: 4,
        userId: 4,
        customerId: 4,
        description: 'description 4',
        status: 'status 4',
        creationDate: '2024-02-27T07:42:53.023Z',
        resolutionDate: '2024-04-29T08:11:29.721Z',
        id: 88,
      },
      {
        ticketId: 5,
        userId: 5,
        customerId: 5,
        description: 'description 5',
        status: 'status 5',
        creationDate: '2024-01-17T10:00:46.981Z',
        resolutionDate: '2023-05-06T04:10:03.711Z',
        id: 69,
      },
    ],
  },
};
export default data;
