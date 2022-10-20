import { useState } from "react";

const Header = ({ setTitle }) => {
  const [inputText, setInputText] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
    setInputText(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    event.target.value !== "" &&
      setTitle({
        name: "",
        search: "/search/",
        query: `&query=${inputText}`,
      });
    setInputText("");
  };

  return (
    <div className="header">
      <ul className="lists_container">
        <li className="logo-container">
          <img src="" alt="logo" className="logo" />
        </li>
        <li>Home</li>
        <li>
          <select
            required
            name="categories"
            id=""
            onClick={(e) =>
              setTitle({ name: `/${e.target.value}`, search: "/", query: "" })
            }
            onBlur={(e) =>
              setTitle({ name: `/${e.target.value}`, search: "/", query: "" })
            }
          >
         
            <option value="now_playing">Now playing Movies </option>
            <option value="upcoming">Upcoming Movies </option>
            <option value="popular">Popular Movies </option>
            <option value="top_rated">Top rated Movies </option>
          </select>
        </li>
        <li>Contact Us</li>
      </ul>

      <ul className="search_container">
        <li>
          <form action="" onSubmit={submitHandler}>
            <input
              type="text"
              onChange={searchHandler}
              value={inputText}
              placeholder="browse movies"
            />
          </form>
        </li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </div>
  );
};

export default Header;