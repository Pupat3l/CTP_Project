import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Listings() {
    const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/ebay-api')
      .then(response => {
        setListings(response.data);
      })
      .catch(error => {
        console.error('Error fetching listings:', error);
      });
  }, []);

  return (
    <div>
      <h1>Listings</h1>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>{listing.title}</li>
          // Replace 'title' with the actual property name in your listing object
        ))}
      </ul>
    </div>
  );
}

