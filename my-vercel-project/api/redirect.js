module.exports = (req, res) => {
  const number = req.query.n;
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const datetime = new Date().toISOString();

  // For now, we'll just log the details. In a real-world scenario, you might want to store this in a database or some other persistent storage.
  console.log(`${number};${ip};${datetime}`);

  // Redirect the user
  res.writeHead(303, { Location: 'https://jobs.lever.co/workithealth/f769f49b-7d5b-42f5-93cb-03837ac0b5c1' });
  res.end();
};
