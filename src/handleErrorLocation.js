/* 

• PERMISSION_DENIED (error code 1)—The user chose not to let the browser have 
access to the location information. 
• POSITION_UNAVAILABLE (error code 2)—The technique used to determine the users 
location was attempted, but failed. 
• TIMEOUT (error code 3)—A timeout value was set as an option, and the attempt to 
determine the location exceeded that limit*/

export function handleErrorLocation(error) {
  switch (error.code) {
    case 0:
      console.log(`there was error ${error.message}`);
      break;
    case 1:
      console.log(`there was error ${error.message}`);
      break;

    default:
      break;
  }
}

/**
 - implement a function for handling user location if the user denies to permission for the location into the project, instead of loging error into the console, using return.
 - error code MDN Documentation
 */
