import "@/styles/searchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchBar({ placeholderText, value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={placeholderText}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="glass-icon" />
      </button>
    </div>
  );
}
