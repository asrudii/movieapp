import { FiSearch } from 'react-icons/fi';

function MyNav({ onClick, onChange }) {
  return (
    <div className="mynav-container">
      <div className="logo">MovieApp</div>
      <div className="search-section">
        <input
          type="text"
          onChange={onChange}
          placeholder="Search movie here...."
        />
        <button onClick={onClick}>
          <FiSearch size={18} />
        </button>
      </div>
      <span className="btn-auth">Login</span>
    </div>
  );
}

export default MyNav;
