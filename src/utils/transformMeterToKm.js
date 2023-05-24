const transformMetersToKm = (meters) => {
  // Transforms m/s to km/s (1m/s equal to 3.6km/h)
  return meters * 3.6;
};

export default transformMetersToKm;

