require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Menu dataset
const menu = [
  {
    id: "academy",
    label: "Academy",
    icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/menu-icon/academy-icon.png",
    link: " https://academy.wavemaker.ai"
  },
  {
    id: "docs",
    label: "Docs",
    icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/menu-icon/docs-icon.png",
    link: "https://docs.wavemaker.ai"
  },
  {
    id: "marketplace",
    label: "Marketplace",
    icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/menu-icon/mp-icon.png",
    link: "https://marketplace.wavemaker.ai"
  },
  {
    id: "webstorybook",
    label: "Web Storybook",
    icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/marketplace-assets/mxp-asset/icon/rs-icon.svg",
    link: "https://react-components.wavemaker.ai",
  },
  {
    id: "mobilestorybook",
    label: "Mobile Storybook",
    icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/menu-icon/mobile-storybook-icon.png",
    link: "https://reactnative-components.wavemaker.ai",
  },
  {
    id: "platform",
    label: "Platform",
    icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/marketplace-assets/mxp-asset/wm-logo.svg",
    link: "https://www.wavemakeronline.com/"
  },
  {
    id: "uikit",
    label: "UI Kit",
    icon: "https://dev-ecosystem.s3.us-east-1.amazonaws.com/menu-icon/ui-kit-icon.png",
    link: "https://www.figma.com/community/file/1463103184874870889/wavemaker-ui-kit"
  },
];

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'WaveMaker Components API',
    version: '1.0.0',
    endpoints: {
      '/api/menu': 'Get all menu items',
      '/api/menu?id=<id>': 'Get menu items excluding the specified id'
    }
  });
});

// GET endpoint to retrieve menu data
// If id query parameter is provided, return all items except the one with that id
app.get('/api/menu', (req, res) => {
  const { id } = req.query;

  if (id) {
    // Filter out the menu item with the matching id
    const filteredMenu = menu.filter(item => item.id !== id);

    res.json({
      success: true,
      excludedId: id,
      count: filteredMenu.length,
      data: filteredMenu
    });
  } else {
    // Return all menu items if no id is provided
    res.json({
      success: true,
      count: menu.length,
      data: menu
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/menu`);
});
