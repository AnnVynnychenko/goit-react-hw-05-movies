# Movie Search App (React)

A React application for searching movies, viewing detailed information, cast
lists, and user reviews using the TMDB API and React Router.

## 📌 Features

- **Movie Search & Trending:** Search for movies by keyword or view top trending
  movies.
- **Detailed Movie Information:** Overview, genres, user score, release year,
  and poster.
- **Cast & Reviews:** Dynamic sub-routes to explore cast members and user
  reviews for selected movies.
- **URL Search Params:** Query retention on search movies.
- **Notifications:** Informative alerts via `react-toastify`.

## 🛠️ Built With

- **React** (Hooks, Custom Components)
- **React Router** (`BrowserRouter`, `Routes`, `Route`, `Outlet`,
  `useSearchParams`, `useParams`, `useLocation`)
- **CSS Modules** for scoped component styling
- **React-Toastify** for user notifications
- **React-Loader-Spinner** for smooth loading states

## 💻 How to Run

1. git clone <repository-url>
2. npm install
3. Set REACT_APP_TMDB_API_KEY=your_key in .env
4. npm start
