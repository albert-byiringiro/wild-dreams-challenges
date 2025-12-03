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


// Which **product** generates the most revenue overall?

function findHighestRevenueProduct(data) {
  const productTotalRevenue = {};
  
  data.products.forEach((productName, productIndex) => {
    let totalRevenueForProduct = 0;
    
    data.values.forEach(regionValues => {
      totalRevenueForProduct += regionValues[productIndex];
    })
    
    productTotalRevenue[productName] = totalRevenueForProduct;
  })
  
  let maxRevenue = -Infinity;
  let highestRevenueProduct = '';
  
  for (let [productName, productRevenue] of Object.entries(productTotalRevenue)) {
    if (productRevenue > maxRevenue) {
      maxRevenue = productRevenue;
      highestRevenueProduct = productName;
    }
  }
  
    return `The product that generates the most revenue overall is: ${highestRevenueProduct} with ${maxRevenue}`;
}

console.log(findHighestRevenueProduct(salesData))


// What's the average sale per region?

function findRegionAverageSale(data) {
  const regionsAverage = data.values.map((regionSalesArray, index) => {
    const totalSales = regionSalesArray.reduce((sum, currentValue) => sum + currentValue, 0);

    const averageSale = totalSales / regionSalesArray.length;

    return {
      regionName: data.regions[index],
      average: parseFloat(averageSale.toFixed(2))
    };
  });

  return regionsAverage;
}

const averageSalesPerRegion = findRegionAverageSale(salesData);
console.log('The average revenue for each region is: ')
console.log(averageSalesPerRegion);