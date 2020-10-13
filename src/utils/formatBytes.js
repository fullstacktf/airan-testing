const formatBytes = (megaBytes) => {
  if (megaBytes / 1000000 >= 1) {
    return (
      amountOfTb(megaBytes) + amountOfGb(megaBytes) + amountOfMb(megaBytes)
    );
  } else if (megaBytes / 1000 >= 1) {
    return amountOfGb(megaBytes) + amountOfMb(megaBytes);
  } else {
    return amountOfMb(megaBytes);
  }
};

const amountOfTb = (megaBytes) => {
  return Math.trunc(megaBytes / 1000000) + "TB ";
};

const amountOfGb = (megaBytes) => {
  return (
    Math.trunc(megaBytes / 1000)
      .toString()
      .slice(-3) + "GB "
  );
};

const amountOfMb = (megaBytes) => {
  return (megaBytes % 1000) + "MB";
};

module.exports = formatBytes;
