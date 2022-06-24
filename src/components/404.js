import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2 className="my-5 is-size-3 has-text-centered-mobile">
        Uh oh, we can't seem to find this one!
      </h2>
      <p>
        Let's get you back on <Link to="/">the right track</Link>.
      </p>
      <p>
        <small>
          <strong>Error Code: </strong> 404
        </small>
      </p>
    </div>
  );
};
export default NotFound;