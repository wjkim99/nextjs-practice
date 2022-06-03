const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  // 리다이렉트하는 방법
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false
      }
    ]
  },
  // 리라이트 : URL은 바뀌지 않고, 페이지만 바뀜
  // API_KEY 등을 숨길 수 있음
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      },
      {
        source: "/api/movie/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
      }
    ];
  }
}
