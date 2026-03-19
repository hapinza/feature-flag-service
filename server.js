const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

const featureConfig = {
  new_ui: 30, // 30% rollout
  beta_feature: 50
};


function isEnabled(userId, percentage) {
  const hash = userId % 100;
  return hash < percentage;
}

app.get('/feature', (req, res) => {
  const { userId, feature } = req.query;

  if (!userId || !feature) {
    return res.status(400).json({ error: 'Missing params' });
  }

  const percentage = featureConfig[feature];

  if (percentage === undefined) {
    return res.status(404).json({ error: 'Feature not found' });
  }

  const enabled = isEnabled(parseInt(userId), percentage);

  res.json({ enabled });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

