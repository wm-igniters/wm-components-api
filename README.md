# WaveMaker Components API

A simple Express.js API that provides WaveMaker menu data with filtering capabilities.

## Features

- GET endpoint to retrieve menu data
- Filter menu items by excluding a specific ID
- CORS enabled for cross-origin requests
- Ready for deployment on multiple platforms

## Installation

```bash
npm install
```

## Running Locally

```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Get All Menu Items

```
GET /api/menu
```

**Response:**
```json
{
  "success": true,
  "count": 7,
  "data": [
    {
      "id": "academy",
      "label": "Academy",
      "icon": "https://dev-ecosystem.s3.us-east-1.amazonaws.com/marketplace-assets/mxp-asset/icon/acd-icon.svg",
      "link": " https://next-academy.wavemaker.com/"
    },
    ...
  ]
}
```

### Get Menu Items Excluding Specific ID

```
GET /api/menu?id=academy
```

**Query Parameters:**
- `id` (string): The ID of the menu item to exclude from results

**Response:**
```json
{
  "success": true,
  "excludedId": "academy",
  "count": 6,
  "data": [
    {
      "id": "docs",
      "label": "Docs",
      "icon": "https://dev-ecosystem.s3.us-east-1.amazonaws.com/marketplace-assets/mxp-asset/icon/wmdocs-icon.svg",
      "link": " https://next-docs.wavemaker.com/"
    },
    ...
  ]
}
```

## Example Usage

```bash
# Get all menu items
curl http://localhost:3000/api/menu

# Get menu items excluding "academy"
curl http://localhost:3000/api/menu?id=academy

# Get menu items excluding "docs"
curl http://localhost:3000/api/menu?id=docs
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd wm-components-api
vercel
```

3. Follow the prompts to complete deployment

### Deploy to Render

1. Create a new account on [Render](https://render.com)
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository or use the "Public Git repository" option
4. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Click "Create Web Service"

### Deploy to Railway

1. Create account on [Railway](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo" or "Deploy from local repo"
4. Railway will auto-detect Node.js and deploy

### Deploy to Heroku

1. Install Heroku CLI
2. Login:
```bash
heroku login
```

3. Create Heroku app:
```bash
cd wm-components-api
heroku create your-app-name
```

4. Deploy:
```bash
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

## Environment Variables

- `PORT`: The port number for the server (default: 3000)

## Project Structure

```
wm-components-api/
├── server.js           # Main Express application
├── package.json        # Project dependencies
├── vercel.json        # Vercel deployment config
├── render.yaml        # Render deployment config
├── .gitignore         # Git ignore file
└── README.md          # Documentation
```

## Technologies Used

- Node.js
- Express.js
- CORS middleware

## License

ISC
