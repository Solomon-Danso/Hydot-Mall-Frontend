Show.proceedOrCancel("Are you sure you want to proceed?", (proceed) => {
  if (proceed) {
    // User chose to proceed, perform the action here
    Show.Success("Action was successful!");
  } else {
    // User chose to cancel
    Show.Attention("Action was cancelled.");
  }
});
