/* eslint-disable */

export const truncateString = (str, truncateLength) => {
  if (str.length > truncateLength) {
    return (
      <Tooltip title={str}>{str.substring(0, truncateLength - 1)}...</Tooltip>
    );
  }
  return str;
};
