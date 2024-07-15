// check browser support
export function isGeolocationSupported() {
  return "geolocation" in Navigator;
}

if (isGeolocationSupported()) {
  console.log("your browser supports geolocation.");
} else {
  console.log("this feature is not available in your browser!");
}

/*

• enableHighAccuracy:true, false:

• timeout—This optional value, provided in milliseconds, tells the browser the 
maximum amount of time it is allowed to calculate the current location. If the 
calculation does not complete in this amount of time, the error handler is called 
instead. This value defaults to Infinity, or no limit. 

• maximumAge—This value indicates how old a location value can be before the 
browser must attempt to recalculate. Again, it is a value in milliseconds. This value 
defaults to zero, meaning that the browser must attempt to recalculate a value 

navigator.geolocation.getCurrentPosition(updateLocation,handleLocationError, 
 {timeout:10000}); 
*/
