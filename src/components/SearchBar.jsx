// SearchBar.jsx
const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = React.useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query); // Remonte la query au parent
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Rechercher..." 
        />
      </form>
    );
  };