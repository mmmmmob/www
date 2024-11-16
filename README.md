# theppitak.me

![Theppitak M_](https://github.com/mmmmmob/me.theppitak/assets/141404845/29d12b14-2540-4953-9c58-075005d9442d)

theppitak.me , my portfolio site built with React, NPM, and Vite. Design with cleanliness and simplicity in mind.

## Table of Contents

- [theppitak.me](#theppitakme)
    - [Table of Contents](#table-of-contents)
    - [Features](#features)
    - [Demo](#demo)
    - [Getting Started](#getting-started)
        - [Prerequisites](#prerequisites)
        - [Installation](#installation)
        - [Running the Project](#running-the-project)
        - [Now Playing Bar](#now-playing-bar)
    - [Technologies Used](#technologies-used)
    - [Contributing](#contributing)
    - [License](#license)

## Features

- Responsive design
- Dark mode support
- Projects showcase

## Demo

Check out the live demo [here](https://theppitak.me).

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following tools installed:

- [Node.js](https://nodejs.org/)

### Installation

1. Clone or create your own respository from template:

   ```sh
   git clone https://github.com/mmmmmob/www.git
   cd www
   ```

2. Install dependencies using Bun:

   ```sh
   npm install
   ```

### Running the Project

Start the development server:

```sh
npm run dev
```

Open your browser and visit `http://localhost:5173` or the address as shown in your terminal to see your portfolio.

### Now Playing Bar

The Now Playing Bar at the bottom pf the page uses Spotify's Now Playing API to retrieve information about your current listening song and render the data live on your site

Refer to the `.env.example` file to learn how to obtain your credential tokens from the Spotify Developer website. Use these tokens in production by creating a `.env.local` file in your folder. Remember to set the actual environment variables on your deployment platform.

You can opt-out of this feature by removing the `<NowPlaying/>` component from `App.jsx`.

(special thanks for initial code reference before adjustments from [@theodorusclarence](https://github.com/theodorusclarence) blog [post](https://theodorusclarence.com/blog/spotify-now-playing))

## Technologies Used

- **Frontend**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [daisyUI](https://daisyui.com/) and [react-icons](https://react-icons.github.io/react-icons/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **JavaScript Runtime and Package Manager**: [Node.js](https://nodejs.org/)

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any feature requests, bug fixes, or improvements.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## License

This project is licensed under the Creative Commons license. See the [LICENSE](LICENSE) file for details.
