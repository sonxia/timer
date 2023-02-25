//if input is NOT not a number (aka a number) and input is greater than or equal to zero then process.stdout.write "." at the inputed times
process.argv.forEach(input => {
  if (!isNaN(input) && input >= 0) {
    setTimeout(() => {
      process.stdout.write(".\n");
    }, input * 1000);
  }
});
