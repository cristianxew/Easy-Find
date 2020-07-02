const apiKey =
  "L7_GCaENiy9MHctHPxlgKCngsUkQqZRvhfN2ARZnLCNO5aXQupzRGwzDGgnLITN7e2lNyQol0Sg45gX18w9L3u1YbQVq7gagdpW9iZq-ZQ_VkSlnGPP9Hhj_mwr5XnYx";

const yelp = {
  async search(term, location, sortBy) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const jsonResponse = await response.json();
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map((business) => {
        console.log(business);
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          price: business.price,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0]
            ? business.categories[0].title
            : "__________",
          rating: business.rating,
          reviewCount: business.review_count,
          url: business.url,
          lat: business.coordinates.latitude,
          lon: business.coordinates.longitude,
        };
      });
    }
  },
};

export default yelp;
