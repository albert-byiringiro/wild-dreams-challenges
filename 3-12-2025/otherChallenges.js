// After taking the challenge in the dream,  I gave myself a challenge to test if I can do other data analysis challenges:

const salesData = {
  regions: ['North', 'South', 'West'],
  products: ['Laptops', 'Phones', 'Tablets', 'Accessories', 'Software'],
  values: [
    [65, 74, 12, 30, 25],
    [20, 44, 10, 40, 55],
    [40, 55, 14, 35, 75]
  ]
};

// Additional metadata
const productCosts = {
  'Laptops': 0.6,      // 60% of revenue is cost
  'Phones': 0.5,       // 50% of revenue is cost
  'Tablets': 0.55,
  'Accessories': 0.3,
  'Software': 0.2
};

const regionTargets = {
  'North': 220,
  'South': 180,
  'West': 230
};

/**
* Basic Aggregation
*/ 

// What's the **total revenue** across all regions and products?
const totalRevenue = salesData.values.flat().reduce((sum, value) => sum + value, 0);
console.log('Total Revenue accross all regions and products:', totalRevenue)

// Which **region** has the highest total sales?
const findHighestTotalSales = (data) => {
    const highestRegionData = data.values.reduce((maxRegion, currentRegionValue, index) => {
        const currentRegionSales = currentRegionValue.reduce((sum, val) => sum + val, 0);

        if (currentRegionSales > maxRegion.sales) {
            return { regionName: data.regions[index], sales: currentRegionSales}
        }

        return maxRegion;
    }, { regionName: '', sales: -Infinity});

    return `The region with the highest total sales is: ${highestRegionData.regionName} with ${highestRegionData.sales}`;
}

console.log(findHighestTotalSales(salesData))