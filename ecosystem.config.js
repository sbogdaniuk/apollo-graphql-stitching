module.exports = {
  apps: [{
    name: 'api-gw',
    cwd: './api-gw',
    script: 'npm',
    args: 'start',
    watch: true,
    autorestart: true,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }, {
    name: 'service-1',
    cwd: './service-1',
    script: 'npm',
    args: 'start',
    watch: true,
    autorestart: true,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }, {
    name: 'service-2',
    cwd: './service-2',
    script: 'npm',
    args: 'start',
    watch: true,
    autorestart: true,
    env: {
      NODE_ENV: 'development',
    },
    env_production: {
      NODE_ENV: 'production',
    },
  }],
}
