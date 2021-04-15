import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";



config.autoAddCss = false;
library.add(fas, fab);
function About(props) {
  return (
    <Layout>
      <div>
        <h4 className="text-center text-muted">About page</h4>
        <p className="lead">
          Bitcoin Price is just a dummy app i built to harness my Nextjs skills
          and better understand the concept of consuming API in Reactjs.
        </p>
        <p className="lead">
          Following the recent development in the crypto space i decided to use
          the coinbase Api to learn and i came up with what you are seeing.
        </p>

        <br />

        <p className="text-center lead">Follow me on social media</p>
        <div className="container">
          <ul className="row list-unstyled list-inline">
            <li className="col">
              <FontAwesomeIcon icon={["fas", "coffee"]} />
            </li>

            <li className="col">
              <FontAwesomeIcon icon={["fas", "coffee"]} />
            </li>
            <li className="col">
              <FontAwesomeIcon icon={["fas", "coffee"]} />
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default About;
