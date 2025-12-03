// After taking the challenge in the dream,  I gave myself a challenge to test if I can do other data analysis challenges:

/**
* Basic Aggregation
*/ 

// What's the **total revenue** across all regions and products?
const totalRevenue = salesData.values.flat().reduce((sum, value) => sum + value, 0);
console.log('Total Revenue accross all regions and products:', totalRevenue)
