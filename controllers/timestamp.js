/**
 * A controller function that returns the time in unix time in miliseconds
 * and the time in UTC.
 * If the request parameter is empty it returns the current time.
 * If the request parameter is a number or date string (YYYY-MM-DD) then it returns the miliseconds
 * and UTC date.
 * @param {request} req - the request object
 * @param {response} res - the response object
 */
function timestampGET(req, res) {
    let date_string = req.params.date_string;
    if (date_string) {
      let regexISO = /^\d{4}-\d{1,2}-\d{1,2}$/g;
      let regexMilis = /^\d+$/g;
      if (regexISO.test(date_string)) {
        let date = new Date(Date.parse(date_string));
        res.json({
          unix: date.getTime(),
          utc: date.toUTCString()
        });
      } else if (regexMilis.test(date_string)) {
        let milis = parseInt(date_string);
        let date = new Date(milis);
        res.json({
          unix: date.getTime(),
          utc: date.toUTCString()
        });
      } else {
        res.json({
          error: "Invalid Date"
        });
      }
    } else {
      let date = new Date();
      res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
      });
    }
};
exports.timestampGET = timestampGET;