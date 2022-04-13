import Link from 'next/link';

export default function MovieCard({ image, imdbID, title, year }) {
  return (
    <div className="card-movie-container">
      <img src={image} alt="movie image" />
      <Link href={`/search/${imdbID}`}>
        <h2>{title}</h2>
      </Link>
      <span>Year : {year}</span>
    </div>
  );
}
